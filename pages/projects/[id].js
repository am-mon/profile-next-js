import { useRouter } from "next/router";
import projectsData from "../../data/projects.json";
import Layout from "../../components/layout";
import Section from "../../components/section";
import Image from "next/image";
import Link from "next/link";
import utilStyles from "../../styles/utils.module.css";
import Button from "../../components/button";
// import { BsArrowLeft } from "react-icons/bs";
// import Transition from "../../components/transition";
import Head from "next/head";

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
    return (
      <div className="bg-zinc-50 px-5 py-20 text-center">
        <p className="text-3xl">Project not found!</p>
      </div>
    );
  }

  const prevProject = projectsData.projects[currentProjectIndex - 1] || null;
  const nextProject = projectsData.projects[currentProjectIndex + 1] || null;

  return (
    <Layout>
      <div>
        {project ? (
          <>
            <Head>
              <title>
                {id ? `Project ${id} - ${project.title}` : "Loading..."}
              </title>
            </Head>
            <div className="bg-blue-50 bg-gradient-to-tr from-indigo-200 via-zinc-50 to-blue-200 px-5 py-14">
              <div className="text-center">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                  {project.title}
                </h1>
                <p className="text-xl md:text-2xl mt-2 mb-5">
                  - {project.description}
                </p>
                <ul className="flex flex-wrap text-sm text-zinc-700 mt-3 justify-center">
                  {project.programming_languages.map((list, index) => (
                    <li
                      key={index}
                      className="mr-1 mb-1 bg-blue-200 px-2 py-1 rounded"
                    >
                      {list}
                    </li>
                  ))}
                </ul>
                <a
                  className="block w-fit my-5 mx-auto"
                  href={project.url}
                  target="_blank"
                >
                  <Button>Go To Website</Button>
                </a>
              </div>
            </div>

            {project.images?.some((img) => img.src == "") && (
              <div className="bg-blue-50">
                <div className="container mx-auto py-20 px-5">
                  <Image
                    src={`/assets/images/${project.img}`}
                    width={1000}
                    height={1000}
                    // layout="responsive"
                    className={`${utilStyles.project_featured_img} mx-auto`}
                    alt=""
                  />
                </div>
              </div>
            )}

            {project.images?.some((img) => img.src !== "") && (
              <div className="bg-blue-50">
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
                                index % 2 === 0
                                  ? "flex-row-reverse"
                                  : "flex-row"
                              }`}
                            >
                              <h3
                                className={`text-2xl md:text-3xl lg:text-4xl text-blue-600 font-bold ${
                                  index % 2 === 0 ? "ml-10" : "mr-10"
                                }`}
                              >
                                {item.desc}
                              </h3>
                              <span className="text-3xl md:text-4xl lg:text-5xl text-zinc-600 font-bold">
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
              <Link
                className="bg-blue-600 text-white hover:bg-blue-800 hover:text-white font-medium py-2 px-2 text-base lg:text-sm rounded"
                href={`/projects/${prevProject.id}`}
              >
                ← Previous
              </Link>
            ) : (
              <span className="opacity-50 px-4 py-2 ">← Previous</span>
            )}

            {nextProject ? (
              <Link
                className="bg-blue-600 text-white hover:bg-blue-800 hover:text-white font-medium py-2 px-5 text-base lg:text-sm rounded"
                href={`/projects/${nextProject.id}`}
              >
                Next →
              </Link>
            ) : (
              <span className="opacity-50 px-4 py-2">Next →</span>
            )}
          </div>
        </Section>
      </div>
    </Layout>
  );
}
