import { useRouter } from "next/router";
import projectsData from "../../data/projects.json";
import Section from "../../components/section";
import Image from "next/image";
import Link from "next/link";
import utilStyles from "../../styles/utils.module.css";
import Button from "../../components/button";
import { BsArrowLeft } from "react-icons/bs";
// import Transition from "../../components/transition";

export default function ProjectDetailPage() {
  const router = useRouter();
  const { id } = router.query;
  const projectId = Number(id);
  // const projectId = parseInt(id, 10);
  const project = projectsData.projects.find((proj) => proj.id === projectId);

  //   console.log(router.query);
  //   console.log(router.query.id);
  //   console.log(projectsData);
  console.log(project);

  // Find the current project
  const currentProjectIndex = projectsData.projects.findIndex(
    (proj) => proj.id === projectId
  );

  if (currentProjectIndex === -1) {
    return <p>Project not found</p>;
  }

  const prevProject = projectsData.projects[currentProjectIndex - 1] || null;
  const nextProject = projectsData.projects[currentProjectIndex + 1] || null;

  return (
    <div>
      {project ? (
        <>
          <div className="bg-zinc-50 px-5 pt-10 sm:pt-0 md:pt-0">
            <a
              className="flex items-center w-fit static sm:fixed md:fixed top-10 float-right sm:float-none md:float-none bg-emerald-300 font-medium py-1 px-2 text-sm rounded"
              href="/"
            >
              <BsArrowLeft className="mr-2" /> Back to Profile
            </a>
            <div className="bg-zinc-50 container mx-auto flex flex-col sm:flex-row md:flex-row lg:flex-row items-center justify-between">
              <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 py-10">
                <div>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                    {project.title}
                  </h1>
                  <p className="text-xl md:text-2xl mt-2 mb-5">
                    - {project.description}
                  </p>
                  <ul className="flex flex-wrap text-xs text-zinc-500 mt-3">
                    {project.programming_languages.map((list, index) => (
                      <li
                        key={index}
                        className="mr-1 mb-1 bg-zinc-200 px-2 py-1 rounded"
                      >
                        {list}
                      </li>
                    ))}
                  </ul>
                  <a
                    className="block w-fit my-5"
                    href={project.url}
                    target="_blank"
                  >
                    <Button>URL: {project.url}</Button>
                  </a>
                </div>
                <div></div>
              </div>
              <div
                className={`${utilStyles.project_top_img} w-auto sm:w-1/2 md:w-1/2 lg:w-1/2`}
              >
                <Image
                  src={`/assets/images/${project.img}`}
                  width={1000}
                  height={1000}
                  // layout="responsive"
                  className={utilStyles.project_featured_img}
                  alt=""
                />
              </div>
            </div>
          </div>

          {project.images?.some((img) => img.src !== "") && (
            <div className="bg-zinc-100">
              <div className="container mx-auto py-10 px-5">
                <ul>
                  {project.images?.map(
                    (item, index) =>
                      item?.src && (
                        <li
                          className={`my-10 w-4/5 md:w-2/3 lg:w-2/3 ${
                            index % 2 === 1 ? "ml-auto" : "mr-auto"
                          }`}
                          key={index}
                        >
                          <div
                            className={`flex items-center justify-between mb-5 ${
                              index % 2 === 0 ? "flex-row-reverse" : "flex-row"
                            }`}
                          >
                            <h3
                              className={`text-2xl md:text-3xl lg:text-4xl font-bold ${
                                index % 2 === 0 ? "ml-10" : "mr-10"
                              }`}
                            >
                              {item.desc}
                            </h3>
                            <span className="text-3xl md:text-4xl lg:text-5xl text-gray-300 font-bold">
                              {(index + 1).toString().padStart(2, "0")}
                            </span>
                          </div>
                          <img
                            src={`/assets/images/project_images/${item.src}`}
                            width={1000}
                            height={1000}
                            layout="responsive"
                            alt=""
                          />
                        </li>
                      )
                  )}
                </ul>
              </div>
            </div>
          )}
        </>
      ) : (
        <div className="bg-zinc-50">
          <Section>
            <p>Project not found.</p>
          </Section>
        </div>
      )}

      <Section>
        <div className="flex justify-between">
          {prevProject ? (
            <Link href={`/projects/${prevProject.id}`}>← Previous</Link>
          ) : (
            <span className="opacity-50 px-4 py-2">← Previous</span>
          )}

          {nextProject ? (
            <Link href={`/projects/${nextProject.id}`}>Next →</Link>
          ) : (
            <span className="opacity-50 px-4 py-2">Next →</span>
          )}
        </div>
      </Section>
    </div>
  );
}
