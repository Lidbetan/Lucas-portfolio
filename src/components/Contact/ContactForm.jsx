import { useState, useRef } from "react";
import { useEffect } from "react";
import emailjs from '@emailjs/browser'
import { toast } from 'react-toastify';

const ContactForm = () => {
    const form = useRef();
    //Form Validation
    const [valid, setValid] = useState({
        isValid: 0,
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
                setValid({isValid: 0});
                console.log("Valid is: ", valid.isValid);
                return;
            } else {
                setValid({isValid: 1});
                console.log("Valid is: truthy", valid.isValid);
            }
            console.log("Submited correctly");
        });
    }, []);
    
    const sendEmail = (e) => {
        e.preventDefault();
    
        if (valid.isValid === 0) {
            // Show an error toast if validation fails
            toast.error('You need to complete all fields', {
                position: "bottom-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
            return; // Stop further execution if validation fails
        }
        if(valid.isValid === 1)
        // Proceed with sending the form if validation passes
        emailjs
            .sendForm(
                "default_service",
                "template_5x58fcv",
                form.current,
                `${import.meta.env.VITE_PUBLIC_KEY}`
            )
            .then(
                (result) => {
                    // Show success toast if the form is successfully submitted
                    toast.success('Message Submitted', {
                        position: "bottom-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                    });
                    console.log(result, "Submitted");
                },
                (error) => {
                    // Show an error toast if there's an issue with form submission
                    toast.error('Submission failed. Please try again later.', {
                        position: "bottom-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                    });
                    console.log(error, "Failed");
                }
            );
    };

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
        <div className="flex flex-col justify-center items-center max-w-[425px] mx-auto">
            <form
                id="form"
                ref={form}
                onSubmit={sendEmail}
                className="flex flex-col justify-center w-11/12 "
            >
                <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="  text-slate-900 dark:text-slate-300 
                         p-2 bg-transparent
                         border-solid border-stone-900 dark:border-stone-300 border-2 
                         w-full 
                         rounded-2xl
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
                       border-solid border-stone-900 dark:border-stone-300 border-2
                       rounded-2xl
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
                       border-solid border-stone-900 dark:border-stone-300 border-2 
                       rounded-2xl
                       focus:outline-none"
                />
                {/* {valid.isValid === 0 && (
                    <p className="text-slate-900 dark:text-slate-300 text-center mb-3">
                        All fields must be completed
                    </p>
                )}
                {valid.isValid === 1 && (
                    <p className="text-slate-900 dark:text-slate-300 text-center mb-3">
                        Your message has been submited
                    </p>
                )} */}

                <button
                    type="submit"
                    className="text-center uppercase
             px-5 py-3 w-full md:w-7/12 m-auto text-base
             font-semibold rounded-2xl
             focus:outline-none focus:ring focus:ring-violet-300
             bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500"
                >
                    Let's work
                </button>
            </form>
        </div>
    );
};

export default ContactForm;
