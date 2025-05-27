import { useEffect, useMemo, useState } from "react";
import projects from "../data/projects.json";
import utilStyles from "../styles/utils.module.css";
import Image from "next/image";
import Button from "./button";
import Section from "./section";
import Transition_title from "./transition_title";
import Transition from "./transition";
import Transition_rotate from "./transition_rotate";
import Select from "react-select";

export default function Projects(params) {
  const [projectList, setProjectList] = useState([]);
  const [selectedProgramming, setSelectedProgramming] = useState();
  const [items, setItems] = useState(12);

  const projects_data = projects.projects;
  console.log(projects_data);

  const filterOptions = [
    { value: "All", label: "All" },
    { value: "Vue", label: "Vue" },
    { value: "React", label: "React" },
    { value: "PHP", label: "PHP" },
    { value: "WordPress", label: "WordPress" },
    { value: "Woocommerce", label: "Woocommerce" },
  ];

  useEffect(() => {
    setProjectList(projects_data);
  }, []);

  function getFilteredList() {
    if (!selectedProgramming || selectedProgramming === "All") {
      return projectList;
    }
    return projectList.filter((item) =>
      item.programming_languages.includes(selectedProgramming)
    );
  }

  var filteredList = useMemo(getFilteredList, [
    selectedProgramming,
    projectList,
  ]);

  function handleProgrammingChange(event) {
    // setSelectedProgramming(event.target.value); //without react select installing
    // console.log(event.value);
    setSelectedProgramming(event.value);
    setItems(12);
  }

  return (
    <>
      <div className="bg-blue-100">
        <Section>
          <div className="flex flex-col md:flex-row items-start md:items-center md:justify-between">
            <div className="w-[100%] md:w-[50%]">
              <Transition_title>
                <h2 className={utilStyles.headingXl}>Projects</h2>
              </Transition_title>
            </div>
            <div className="w-[100%] md:w-[50%] flex flex-col md:flex-row items-start md:items-center justify-end">
              <label className="mb-2 md:mb-0 md:mr-2">Filter by: </label>
              {/* <select
                name="programming-list"
                onChange={handleProgrammingChange}
                className="bg-white border border-gray-300 p-2 rounded min-w-[100%] md:min-w-[200px] outline-0"
              >
                <option value="">All</option>
                <option value="React">React</option>
                <option value="PHP">PHP</option>
                <option value="WordPress">WordPress</option>
                <option value="Woocommerce">Woocommerce</option>
              </select> */}
              <Select
                instanceId="select_programming"
                name="programming-list"
                onChange={handleProgrammingChange}
                options={filterOptions}
                defaultValue={filterOptions[0]}
                className=" min-w-[100%] md:min-w-[220px] outline-0 border-0"
                theme={(theme) => ({
                  ...theme,
                  border: 1,
                  borderRadius: 4,
                  colors: {
                    ...theme.colors,
                    text: "#000000",
                    primary25: "oklch(88.2% 0.059 254.128)",
                    primary: "oklch(88.2% 0.059 254.128)",
                    neutral0: "#ffffff", // Background color of the select box
                  },
                })}
                styles={{
                  control: (base) => ({
                    ...base,
                    borderWidth: 2, // 2px border width
                    borderColor: "oklch(88.2% 0.059 254.128)",
                    "&:hover": {
                      borderColor: "oklch(54.6% 0.245 262.881)",
                    },
                  }),
                }}
              />
            </div>
          </div>

          <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-10 mt-7">
            {filteredList
              ?.map((item) => (
                <Transition key={item.id}>
                  <li className="flex justify-between w-full h-full box-border p-6 shadow-lg shadow-grey-500/50 rounded bg-white hover:bg-blue-50">
                    <div className="w-[50%] relative">
                      <h4 className="text-lg font-semibold">{item.title}</h4>
                      <p className="text-base text-base lg:text-sm text-zinc-600 mt-3">
                        {item.description}
                      </p>
                      <ul className="flex flex-wrap text-sm text-zinc-700 mt-3">
                        {item.programming_languages.map((list, index) => (
                          <li
                            key={index}
                            className="mr-1 mb-1 bg-blue-200 px-2 py-1 rounded"
                          >
                            {list}
                          </li>
                        ))}
                      </ul>
                      <a
                        className="block mt-3 text-base lg:text-sm 2xl:absolute bottom-0 left-0 static"
                        // href={item.url}
                        href={`./projects/${item.id}`}
                        // target="_blank"
                      >
                        <Button>View Project</Button>
                      </a>
                    </div>
                    <div className="w-[47%]">
                      {item.img && (
                        <div className="shadow-lg shadow-grey-500/50 p-1">
                          <a
                            className="block static transition-opacity duration-300 hover:opacity-75"
                            href={item.url}
                            target="_blank"
                          >
                            <Image
                              src={`/assets/images/${item.img}`}
                              width={500}
                              height={500}
                              alt={item.title}
                            />
                          </a>
                        </div>
                      )}
                    </div>
                  </li>
                </Transition>
              ))
              .reverse()
              .slice(0, items)}
          </ul>
          <Transition delay_time={0.7} back_repeat>
            <div className="text-center my-10">
              Showing{" "}
              {filteredList?.length > items ? items : filteredList.length} of{" "}
              {filteredList.length}{" "}
              {selectedProgramming === "All" ? "" : selectedProgramming}{" "}
              projects
            </div>
          </Transition>
          {filteredList?.length > items && (
            <>
              <Transition_rotate delay_time={0.7} back_repeat>
                <button
                  onClick={() => setItems(items + 12)}
                  className="block decoration-0 hover:decoration-0 mt-5 mx-auto bg-blue-600 text-white py-2 px-5 rounded-lg hover:bg-black hover:text-white"
                >
                  View More
                </button>
              </Transition_rotate>
            </>
          )}
        </Section>
      </div>
    </>
  );
}
