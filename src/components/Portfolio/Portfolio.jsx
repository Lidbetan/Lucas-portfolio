import portfolio from "../../data/portfolio";
import PortfolioItem from "./PortfolioItem";

const Portfolio = () => {
    return (
        <>
            <section className="my-14" id="projects">
                <h2 className="font-bold mb-20 text-2xl text-center uppercase text-slate-900 dark:text-slate-300">
                    My projects
                </h2>
                <div className="flex flex-col md:flex-row items-center justify-center mx-auto ">
                    <div className="flex flex-col md:flex-row flex-wrap items-center justify-center gap-4 mx-auto mb-9  text-black dark:text-white">
                        {portfolio.map((projects) => (
                            <a key={projects.id} href={projects.link} rel="noreferrer" target="_blank">
                                <PortfolioItem
                                    key={projects.id}
                                    imgUrl={projects.imgUrl}
                                    title={projects.title}
                                    stack={projects.stack}
                                />
                            </a>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Portfolio;
