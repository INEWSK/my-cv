// my cv page
// header included my name, title, and contact info
// education section
// experience section
// skills section
// projects section
// footer included my name and contact info

import Award from "@/components/award";
import Education from "@/components/education";
import Experience from "@/components/experience";
import Footer from "@/components/footer";
import Project from "@/components/project";
import SectionWrapper from "@/components/section-wrapper";
import Skill from "@/components/skill";
import { FaBlog, FaEnvelope, FaGithub } from "react-icons/fa";

// contactItem included icon and text
// item included mail, blog and github
const contactItem = [
  {
    icon: <FaEnvelope />,
    label: "i@inewsk.me",
    url: "mailto:i@inewsk.me",
  },
  {
    icon: <FaBlog />,
    label: "Blog",
    url: "https://inewsk.me",
  },
  {
    icon: <FaGithub />,
    label: "Github",
    url: "https://github.com/INEWSK",
  },
];

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
      <header>
        <div className="name">
          <h1 className="full-name">&#40;Yuji&#41; YUEN Yik Chun</h1>
          <h3 className="job-title">BSc &#40;Hons&#41; in Computer Sciences</h3>
        </div>
        <div className="contact">
          {contactItem.map((item, index) => (
            <a
              key={index}
              className="contact-item"
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              title={item.label}
            >
              <span className="icon">{item.icon}</span>
              <span className="label">{item.label}</span>
            </a>
          ))}
        </div>
      </header>
      {sectionContent.map((item, index) => (
        <SectionWrapper key={index} title={item.title}>
          <item.node />
        </SectionWrapper>
      ))}
      <Footer />
    </main>
  );
}
