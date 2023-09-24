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

const Header = () => {
  return (
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
  );
};

export default Header;
