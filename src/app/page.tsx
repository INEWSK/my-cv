import Award from "@/app/ui/award";
import Education from "@/app/ui/education";
import Experience from "@/app/ui/experience";
import Project from "@/app/ui/project";
import Skill from "@/app/ui/skill";
import Footer from "@/components/footer";
import Header from "@/components/header";

const sectionContent = [
  {
    label: "Education",
    node: Education,
  },
  {
    label: "Experience",
    node: Experience,
  },
  {
    label: "Projects",
    node: Project,
  },
  {
    label: "Awards",
    node: Award,
  },
  {
    label: "Skills",
    node: Skill,
  },
] as const;

export default function Page() {
  return (
    <main>
      <Header />
      {sectionContent.map((item) => (
        <section key={item.label} className={item.label.toLowerCase()}>
          <h2>{item.label}</h2>
          <hr />
          <item.node />
        </section>
      ))}
      <Footer />
    </main>
  );
}
