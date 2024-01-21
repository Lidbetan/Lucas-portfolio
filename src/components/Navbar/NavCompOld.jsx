import { NavHashLink } from "react-router-hash-link";

const NavComp = () => {
  return (
    <div className="compOfMyOwn">
      <nav className="bg-slate-600 dark:bg-slate-300 px-4 mt-4 rounded-md">
        <ul className="grid grid-rows-2 grid-cols-3 md:flex justify-center gap-2 py-2 uppercase font-semibold">
          <NavHashLink
            className="text-slate-300 dark:text-slate-900 "
            smooth
            to="/#"
          >
            Home
          </NavHashLink>
          <NavHashLink
            className=" text-slate-300 dark:text-slate-900"
            smooth
            to="/#about"
          >
            About
          </NavHashLink>
          <NavHashLink
            className=" text-slate-300 dark:text-slate-900"
            smooth
            to="/#skills"
          >
            Skills
          </NavHashLink>
          <NavHashLink
            className=" text-slate-300 dark:text-slate-900"
            smooth
            to="/#projects"
          >
            Projects
          </NavHashLink>
          <NavHashLink
            className=" text-slate-300 dark:text-slate-900"
            smooth
            to="/#contact"
          >
            Contact
          </NavHashLink>
        </ul>
      </nav>
    </div>
  );
};

export default NavComp;


