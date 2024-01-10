import { useState } from "react";
import { useEffect } from "react";

const ContactForm = () => {
  //Form Validation
  const [valid, setValid] = useState({
    isValid: "",
  });

  const formInputs = {
    name: "",
    email: "",
    message: "",
  };
  
  useEffect(() => {
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");
    const form = document.getElementById("form");
    //This function reads the input value and asign it to the propertie.
    const readInput = (e) => {
      formInputs[e.target.id] = e.target.value;
      console.log(formInputs);
    };

    if (nameInput !== "") {
      nameInput.addEventListener("input", readInput);
    }
    if (emailInput) {
      emailInput.addEventListener("input", readInput);
    }
    if (messageInput) {
      messageInput.addEventListener("input", readInput);
    }

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const { name, email, message } = formInputs;
      if (name == "" || email == "" || message == "") {
        setValid({
          
        });
        console.log("Valid is: ", valid.isValid)
        return;
      } else {
        setValid(1);
        console.log("Valid is: ", valid.isValid)
      }
      console.log("Submited correctly")
      // submitFormData({ name, email, message });
    });
  }, []);

  //Async function that submits the form after passing the validation.
  // const submitFormData = async (data) => {
  //   try {
  //     const response = await fetch(
  //       "https://getform.io/f/3f617c8d-0f0a-4835-a6f5-609ba68801f5",
  //       {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify(data), //Stringifies the data passed as argument
  //       }
  //     );

  //     if (response.ok) {
  //       console.log("Form submitted successfully!");
  //     } else {
  //       console.error("Form submission failed");
  //     }
  //   } catch (error) {
  //     console.error("An error occurred during form submission:", error);
  //   }
  // };

  return (
    <div className="flex flex-col justify-center items-center">
      <form id="form" className="flex flex-col justify-center  w-full md:">
        <input
          id="name"
          type="text"
          name="name"
          placeholder="Name"
          className="  text-slate-900 dark:text-slate-300 
                         p-2 bg-transparent
                         border-solid border-slate-600 border-2 
                         w-full 
                         rounded-md
                         focus:outline-none"
        />
        <input
          id="email"
          type="text"
          name="email"
          placeholder="Email"
          className="text-slate-900 dark:text-slate-300
                       my-2 p-2 bg-transparent
                       w-full
                       border-solid border-slate-600 border-2
                       rounded-md
                       focus:outline-none"
        />
        <textarea
          id="message"
          name="message"
          placeholder="Message"
          rows="10"
          className="text-slate-900 dark:text-slate-300
                       p-2 mb-4 bg-transparent
                       w-full
                       border-solid border-slate-600 border-2 
                       rounded-md
                       focus:outline-none"
        />
        {valid.isValid === 0 && 
          <p className="text-slate-900 dark:text-slate-300 text-center mb-3">
            All fields must be completed
          </p>
         }
        {valid.isValid === 1 && 
          <p className="text-slate-900 dark:text-slate-300 text-center mb-3">
            Your message has been submited
          </p>
        }

        <button
          type="submit"
          className="text-center uppercase
             px-5 py-3 w-full md:w-7/12 m-auto text-base
             font-semibold rounded-md
             bg-gradient-to-r from-orange-500 to-blue-400 drop-shadow-md"
        >
          Let's work
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
