// import ThemeContext from "../context/ThemeContext";
// import { useContext } from "react";
import ContactForm from "./ContactForm";

const Contact = () => {
  
  return (
    <>
      <section id="contact" className="w-screen ">
      <ContactForm/>
        {/* <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/lucas-id-betan-dev/"
        >
          {theme === "dark" ? (
            <div>
              <box-icon
                name="linkedin-square"
                type="logo"
                animation="tada-hover"
                color="#cbd5e1"
                size="lg"
              ></box-icon>
            </div>
          ) : (
            <div>
              <box-icon
                name="linkedin-square"
                type="logo"
                animation="tada-hover"
                color="#475569"
                size="lg"
              ></box-icon>
            </div>
          )}
        </a> */}
      </section>
    </>
      
  );
};

export default Contact;
