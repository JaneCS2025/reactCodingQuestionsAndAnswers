import { useEffect, useRef } from "react";
import './Accordion.css'

export default function Accordion() {
 const rootRef = useRef(null);

 useEffect(() => {
  const root = rootRef.current;
  const sections = Array.from(root.children);
  const listeners = [];

  sections.forEach((section) => {
    const header = section.children[0];
    const content = section.children[1];
    const icon = header.querySelector(".accordion-icon");

    content.style.display = "none";
    header.style.cursor = "pointer";

    const handler = () => {
      const isHidden = content.style.display === "none";
      content.style.display = isHidden ? "block" : "none";
      icon.style.transform = isHidden ? "rotate(90deg)" : "rotate(0deg)";
    };

    header.addEventListener("click", handler);
    listeners.push({ header, handler });
  });

  return () => {
    listeners.forEach(({ header, handler }) =>
      header.removeEventListener("click", handler)
    );
  };
}, []);

  return (
    <div ref={rootRef}>
      <div>
        <div>
          HTML{' '}
          <span aria-hidden={true} className="accordion-icon" />
        </div>
        <div>
          The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser.
        </div>
      </div>

      <div>
        <div>
          CSS{' '}
          <span aria-hidden={true} className="accordion-icon" />
        </div>
        <div>
          Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML.
        </div>
      </div>

      <div>
        <div>
          JavaScript{' '}
          <span aria-hidden={true} className="accordion-icon" />
        </div>
        <div>
          JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.
        </div>
      </div>
    </div>
  );
}