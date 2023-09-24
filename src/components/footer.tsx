"use client";

const Footer = () => {
  return (
    <footer>
      <p>
        Made with <span className="heart">❤</span> by{" "}
        <a
          href="https://inewsk.me"
          target="_blank"
          rel="noopener noreferrer"
          title="Yuji Kurokawa (YK) Blog"
        >
          Yuji Kurokawa &#40;YK&#41;
        </a>
      </p>
      <a
        className="print"
        href="/print"
        title="Print this page"
        onClick={(e) => {
          e.preventDefault();
          window.print();
        }}
      >
        PDF Print
      </a>
    </footer>
  );
};

export default Footer;
