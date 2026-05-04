# Troubleshooting Log: Build Issues After Reorganization

## Issue Description
After moving several components from `src/components` to `src/sections`, the application failed to compile with "Module not found" errors.

## Primary Cause: Broken Relative Imports
When a file is moved to a new directory, any **relative imports** (e.g., `import { useResume } from "./ResumeContext"`) within that file are broken because the distance and path to the dependency have changed.

### Specific Instances:
1. **`src/sections/DashboardOverview.tsx`**:
   - **Original Path**: `src/components/DashboardOverview.tsx`
   - **Broken Import**: `import { useResume } from "./ResumeContext"` (assumed `ResumeContext` was in the same folder).
   - **Resolution**: Updated to use the absolute alias: `import { useResume } from "@/components/ResumeContext"`.

2. **`src/app/page.tsx`**:
   - **Issue**: The terminal reported a failure to resolve `@/components/DashboardOverview`.
   - **Cause**: The file had been moved to `src/sections/DashboardOverview.tsx` but the import path in `page.tsx` was initially still pointing to the old `components` folder.
   - **Resolution**: Updated the import to `@/sections/DashboardOverview`.

## Prevention Best Practices
- **Use Aliases**: Prefer `@/` aliases over relative paths for core services like Contexts or Utilities. This makes files easier to move without breaking dependencies.
- **IDE Refactoring**: Use IDE features (like "Move File") that automatically update imports whenever possible.
- **Check Dependents**: Always verify files that *import* the moved file and files *imported by* the moved file.
