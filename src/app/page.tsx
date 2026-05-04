"use client";

import { useSearchParams } from "next/navigation";
import PersonalInfoForm from "@/components/PersonalInfoForm";
import ExperienceForm from "@/components/ExperienceForm";
import SkillsForm from "@/components/SkillsForm";
import EducationForm from "@/components/EducationForm";
import CertificationForm from "@/components/CertificationForm";
import ProjectsForm from "@/components/ProjectsForm";
import DashboardOverview from "@/sections/DashboardOverview";
import { Suspense } from "react";
import Templates from "@/sections/Templates";
import Tips from "@/sections/Tips";
import Support from "@/sections/Support";

function FormContent() {
  const searchParams = useSearchParams();
  const section = searchParams.get("section") || "overview";

  switch (section) {
    case "experience":
      return <ExperienceForm />;
    case "skills":
      return <SkillsForm />;
    case "education":
      return <EducationForm />;
    case "certifications":
      return <CertificationForm />;
    case "projects":
      return <ProjectsForm />;
    case "personal":
      return <PersonalInfoForm />;
    case "templates":
      return <Templates />;
    case "tips":
      return <Tips />;
    case "support":
      return <Support />;
    case "overview":
    default:
      return <DashboardOverview />;
  }
}

export default function Home() {
  return (
    <Suspense fallback={<div>Loading form...</div>}>
      <FormContent />
    </Suspense>
  );
}
