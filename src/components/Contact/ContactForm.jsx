import React from "react";

const ContactForm = () => {
  return (

      <div className="flex flex-col justify-center items-center">
        <form
          action="https://getform.io/f/3f617c8d-0f0a-4835-a6f5-609ba68801f5"
          method="POST"
          className="flex flex-col justify-center  w-full md:"
        >
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="p-2 bg-transparent
                         border-solid border-slate-600 border-2 
                         w-full 
                         rounded-md
                         focus:outline-none"
          />
          <input
            type="text"
            name="email"
            placeholder="Email"
            className="my-2 p-2 bg-transparent
                       w-full
                       border-solid border-slate-600 border-2
                       rounded-md
                       focus:outline-none"
          />
          <textarea
            name="message"
            placeholder="Message"
            rows="10"
            className="p-2 mb-4 bg-transparent
                       w-full
                       border-solid border-slate-600 border-2 
                       rounded-md
                       focus:outline-none"
          />
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
