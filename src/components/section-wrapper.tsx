import React from "react";

// write a section wrapper component here
// it should accept a title prop and a children prop
const SectionWrapper = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <section className={title.toLowerCase()}>
      <h2>{title}</h2>
      <hr />
      {children}
    </section>
  );
};

export default SectionWrapper;
