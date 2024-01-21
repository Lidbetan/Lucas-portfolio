import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { NavHashLink } from "react-router-hash-link";

export default function Example() {
    
    return (
        <Disclosure
            as="nav"
            className="bg-slate-600 dark:bg-slate-300 px-4 mt-4 rounded-md w-11/12 lg:w-6/12 xl:w-4/12"
        >
            {({ open }) => (
                <>
                    
                        <div className="relative flex flex-row h-16 mx-auto lg:ml-4 items-center justify-center">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="items-center justify-center rounded-md p-2 text-slate-300 dark:text-slate-600 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    {open ? (
                                        <XMarkIcon
                                            className="block h-6 w-6"
                                            aria-hidden="true"
                                        />
                                    ) : (
                                        <Bars3Icon
                                            className="h-6 w-6"
                                            aria-hidden="true"
                                        />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div>
                                {/*--------LOGO SVG--------*/}
                        
                                {/* <div className="logo text-slate-300 dark:text-slate-600">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                    
                                    >
                                        <path d="m7.375 16.781 1.25-1.562L4.601 12l4.024-3.219-1.25-1.562-5 4a1 1 0 0 0 0 1.562l5 4zm9.25-9.562-1.25 1.562L19.399 12l-4.024 3.219 1.25 1.562 5-4a1 1 0 0 0 0-1.562l-5-4zm-1.649-4.003-4 18-1.953-.434 4-18z" />
                                    </svg>
                                </div> */}
                                <div className="hidden sm:block">
                                    <div className="flex space-x-4">
                                        <ul className=" md:flex justify-center gap-4 py-2 uppercase font-semibold">
                                            <NavHashLink
                                                className="my-links text-slate-300 dark:text-slate-600  "
                                                smooth
                                                to="/#"
                                            >
                                                Home
                                            </NavHashLink>
                                            <NavHashLink
                                                className=" my-links text-slate-300 dark:text-slate-600 "
                                                smooth
                                                to="/#about"
                                            >
                                                About
                                            </NavHashLink>
                                            <NavHashLink
                                                className=" my-links text-slate-300 dark:text-slate-600 "
                                                smooth
                                                to="/#skills"
                                            >
                                                Skills
                                            </NavHashLink>
                                            <NavHashLink
                                                className=" my-links text-slate-300 dark:text-slate-600 "
                                                smooth
                                                to="/#projects"
                                            >
                                                Projects
                                            </NavHashLink>
                                            <NavHashLink
                                                className=" my-links text-slate-300 dark:text-slate-600"
                                                to="/#contact"
                                            >
                                                Contact
                                            </NavHashLink>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"></div>
                        </div>
                    <Disclosure.Panel className="sm:hidden">
                        <div className=" px-2 pb-3 pt-2">
                            <Disclosure.Button>
                                {/*------RESPONSIVE MENU OPENED------- */}
                                <ul className="flex flex-col items-start md:flex justify-center gap-2 py-2 uppercase font-semibold">
                                    <NavHashLink
                                        className="text-slate-300 dark:text-slate-600 hover:animate-ping "
                                        smooth
                                        to="/#"
                                    >
                                        Home
                                    </NavHashLink>
                                    <NavHashLink
                                        className=" text-slate-300 dark:text-slate-600"
                                        smooth
                                        to="/#about"
                                    >
                                        About
                                    </NavHashLink>
                                    <NavHashLink
                                        className=" text-slate-300 dark:text-slate-600"
                                        smooth
                                        to="/#skills"
                                    >
                                        Skills
                                    </NavHashLink>
                                    <NavHashLink
                                        className=" text-slate-300 dark:text-slate-600"
                                        smooth
                                        to="/#projects"
                                    >
                                        Projects
                                    </NavHashLink>
                                    <NavHashLink
                                        className=" text-slate-300 dark:text-slate-600"
                                        smooth
                                        to="/#contact"
                                    >
                                        Contact
                                    </NavHashLink>
                                </ul>
                            </Disclosure.Button>
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    );
}
