import { useState } from "react";
import projects from "../data/projects.json";
import utilStyles from "../styles/utils.module.css";
import Image from "next/image";

export default function Projects(params) {
  const projects_data = projects.projects;
  console.log(projects_data);

  const [items, setItems] = useState(6);

  return (
    <>
      <div className="bg-zinc-200 py-20">
        <div className="container mx-auto box-border px-3">
          <h2 className={utilStyles.headingXl}>Projects</h2>
          <ul className="flex flex-wrap justify-between text-left mt-10 flex-col md:flex-row">
            {projects_data?.slice(0, items).map((item) => (
              <li
                key={item.id}
                className="lg:w-[32%] md:w-[49%] w-full box-border p-10 md:mb-[2%] mb-3 shadow-lg shadow-grey-500/50 rounded bg-white"
              >
                <h4 className="text-lg font-semibold">{item.title}</h4>
                <p className="text-zinc-600 mt-3 ">{item.description}</p>
                <ul className="flex flex-wrap text-xs text-zinc-500 mt-3">
                  {item.programming_languages.map((list, index) => (
                    <li key={index} className="mr-3 mb-1">
                      {list}
                    </li>
                  ))}
                </ul>
                <a
                  className="block mt-3 text-sm text-zinc-500 mt-3 underline"
                  href={item.url}
                  target="_blank"
                >
                  View Website
                </a>
              </li>
            ))}
          </ul>
          {projects_data?.length > items && (
            <button
              onClick={() => setItems(items + 6)}
              className="block decoration-0 hover:decoration-0 mt-5 mx-auto bg-zinc-700 text-white py-2 px-5 rounded-lg"
            >
              View More
            </button>
          )}
        </div>
      </div>
    </>
  );
}
