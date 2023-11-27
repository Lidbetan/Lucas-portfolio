import React from "react";
import portfolio from "../../data/portfolio";
import PortfolioItem from "./PortfolioItem";

const Portfolio = () => {
  return (
    <>
      <div className="my-10">
        <h2 className="font-bold mb-20 text-2xl text-center uppercase text-slate-900 dark:text-slate-300">
          My projects
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-center ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mb-9  text-black dark:text-white">
            {portfolio.map((projects) => (
              <PortfolioItem
                key={projects.id}
                imgUrl={projects.imgUrl}
                title={projects.title}
                stack={projects.stack}
                link={projects.link}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
