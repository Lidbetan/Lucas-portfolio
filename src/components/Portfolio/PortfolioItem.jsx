const PortfolioItem = ({ title, imgUrl, stack, link, repo }) => {
    return (
        <div className="max-w-[425px] max-h-[340px] lg:h-[340px] border-2 bg-slate-200 dark:bg-slate-500 border-stone-900 dark:border-stone-300 rounded-3xl overflow-hidden">
            <div className="border-black border-b-{4px}">
                <a href={link} rel="noreferrer" target="_blank">
                    <img
                        src={imgUrl}
                        alt="portfolio-img"
                        className="mx-auto h-36 md:h-48 cursor-pointer "
                    ></img>
                </a>
            </div>
            <div className="p-4 flex flex-col justify-center items-center">
                <div className="flex justify-center items-center gap-2 mb-4">
                    <h3 className="text-center text-lg md:text-xl font-semibold">
                        {title}
                    </h3>
                    <a href={repo} rel="noreferrer" target="_blank">
                        <img
                            src="/assets/github-icon.png"
                            alt="github-icon"
                            className="min-h-[24px] min-w-[24px]"
                        ></img>
                    </a>
                </div>

                <p className="flex flex-wrap gap-2 flew-row items-center justify-start text-xs md:text-sm ">
                    {stack.map((item, i) => (
                        <span
                            className="m-auto inline-block px-2 py-1 font-semibold border-2
                                border-stone-900 dark:border-stone-300
                                bg-slate-600 dark:bg-slate-300 
                                text-white dark:text-black
                                rounded-2xl"
                            key={[i]}
                        >
                            {item}
                        </span>
                    ))}
                </p>
            </div>
        </div>
    );
};

export default PortfolioItem;
