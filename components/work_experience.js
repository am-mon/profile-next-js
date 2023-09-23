import utilStyles from "../styles/utils.module.css";
import work_experiences from "../data/work_experiences.json";
import education from "../data/education.json";
import { useState } from "react";
import Modal from "react-modal";
import { AiOutlineClose } from "react-icons/ai";
import Button from "./button";
import Section from "./section";
import Transition_title from "./transition_title";
import Transition from "./transition";

export default function Work_experience(params) {
  const work_experiences_data = work_experiences.work_experiences;
  console.log(work_experiences_data);

  const education_data = education.education;
  console.log(education_data);

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalData, setModalData] = useState(null);
  const customStyles = {
    overlay: {
      background: "rgba(0,0,0,0.5)",
    },
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      width: "90%",
      maxWidth: "700px",
      maxHeight: "90%",
      padding: "25px",
      transform: "translate(-50%, -50%)",
      border: "0px",
      boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
      borderRadius: "10px",
      overflow: "auto",
    },
  };

  return (
    <>
      <div className="bg-zinc-50">
        <Section>
          <div
            className={`${utilStyles.amm_shape_bg} flex flex-wrap justify-between text-left flex-col flex-col-reverse md:flex-row`}
          >
            <div className="md:w-[48%] w-full">
              <Transition_title>
                <h2 className={utilStyles.headingXl}>Education</h2>
              </Transition_title>
              <Transition>
                <ul className={`${utilStyles.timeline} mt-7`}>
                  {education_data
                    .slice(0)
                    .reverse()
                    .map((item) => (
                      <li key={item.id}>
                        <h3 className={`font-semibold ${utilStyles.headingMd}`}>
                          {item.title}
                        </h3>
                        <p className="my-2">{item.degree}</p>
                        <p className="text-sm text-zinc-500">{item.duration}</p>
                        <div className="text-sm mt-3">
                          <a href={item.url} target="_blank">
                            <Button>View More</Button>
                          </a>
                        </div>
                      </li>
                    ))}
                </ul>
              </Transition>
            </div>

            <div className="md:w-[48%] w-full mb-20 md:mb-0">
              <Transition_title>
                <h2 className={utilStyles.headingXl}>Experience</h2>
              </Transition_title>
              <Transition>
                <ul className={`${utilStyles.timeline} mt-7`}>
                  {work_experiences_data
                    .slice(0)
                    .reverse()
                    .map((item) => (
                      <li key={item.id}>
                        <h3 className={`font-semibold ${utilStyles.headingMd}`}>
                          {item.title}
                        </h3>
                        <p className="my-2">{item.position}</p>
                        <p className="text-sm text-zinc-500">{item.duration}</p>
                        <div className="text-sm mt-3">
                          <span
                            className="underline cursor-pointer"
                            onClick={() => {
                              setModalData(item);
                              setModalIsOpen(true);
                            }}
                          >
                            <Button>View Job Description</Button>
                          </span>

                          {/* <ul>
                          {item.responsibility.map((list, index) => (
                            <li key={index}>{list}</li>
                          ))}
                        </ul> */}
                        </div>
                      </li>
                    ))}
                </ul>
              </Transition>

              <Modal
                isOpen={modalIsOpen}
                onRequestClose={() => setModalIsOpen(false)}
                style={customStyles}
                ariaHideApp={false}
              >
                <div className="modal_inner">
                  <div className="text-right">
                    <button onClick={() => setModalIsOpen(false)}>
                      <AiOutlineClose className="text-2xl mb-3 hover:text-orange-500" />
                    </button>
                  </div>
                  <h3 className="md:text-lg text-base font-semibold mb-5">
                    Job Descriptions at {modalData?.title}
                  </h3>
                  <ul
                    className={`md:text-base text-sm ${utilStyles.custom_list}`}
                  >
                    {modalData?.responsibility.map((list, index) => (
                      <li key={index}>{list}</li>
                    ))}
                  </ul>
                </div>
              </Modal>
            </div>
          </div>
        </Section>
      </div>
    </>
  );
}
