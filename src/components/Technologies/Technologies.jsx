import Technology from "./Technology";

const Technologies = () => {
  return (
    <>
      <div className="h-screen md:h-96">
        <h2 className="font-bold mb-20 text-2xl text-center text-slate-900 dark:text-slate-300">
          Some of the technologies i'm familiar with
        </h2>
        <Technology />
      </div>
    </>
  );
};

export default Technologies;
