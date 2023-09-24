import Award from "@/components/award";
import Education from "@/components/education";
import Experience from "@/components/experience";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Project from "@/components/project";
import SectionWrapper from "@/components/section-wrapper";
import Skill from "@/components/skill";

const sectionContent = [
  {
    title: "Education",
    node: Education,
  },
  {
    title: "Experience",
    node: Experience,
  },
  {
    title: "Projects",
    node: Project,
  },
  {
    title: "Awards",
    node: Award,
  },
  {
    title: "Skills",
    node: Skill,
  },
];

export default function Home() {
  return (
    <main>
      <Header />
      {sectionContent.map((item, index) => (
        <SectionWrapper key={index} title={item.title}>
          <item.node />
        </SectionWrapper>
      ))}
      <Footer />
    </main>
  );
}
