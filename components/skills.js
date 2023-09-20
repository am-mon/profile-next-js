import skills from "../data/skills.json";
import utilStyles from "../styles/utils.module.css";

export default function Skills(params) {
  const skills_data = skills.skills;
  console.log(skills_data);

  return (
    <>
      <div className="bg-zinc-100 py-20">
        <div className="container mx-auto box-border px-3">
          <h2 className={utilStyles.headingXl}>Programming Skills</h2>
          <ul className="flex flex-wrap justify-between text-left mt-10 flex-col md:flex-row">
            {skills_data?.map((item) => (
              <li key={item.id} className="md:w-[48%] w-full mb-2">
                <div className="flex justify-between mb-1 text-base font-medium">
                  <span>{item.title}</span>
                  <span>{item.rate}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
                  <div
                    className="bg-gray-600 h-2.5 rounded-full dark:bg-gray-300"
                    style={{ width: `${item.rate}%` }}
                  ></div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
