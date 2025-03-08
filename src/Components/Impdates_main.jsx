import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./impdates_main.css"
import { Carousel } from "flowbite-react";
export function Impdates_main() {

  const navigate = useNavigate();
  return (
    <div style={{ backgroundColor: '#F0F8FF' }} className="pt-10">
      <div className="container  mx-auto flex flex-col">
        <div className="flex flex-wrap w-full mb-4 mx-auto">
          <div className="lg:w-full lg:mb-0 ">
            <h1 className="sm:text-5xl text-2xl font-medium title-font mb-2 text-gray-900">
              Important Dates
            </h1>
            <div className="h-1 w-20 bg-indigo-500 rounded"></div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center ">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="main-timeline">
                <div className="timeline">
                  <a className="timeline-content">
                    <span className="timeline-year">15th September</span>
                    <div className="timeline-icon">
                      <i className="fa-regular fa-newspaper"></i>
                    </div>
                    <div className="content">
                      <h3 className="title">Abstract/Paper Submission</h3>
                      <p className="description hidden md:block">
                        Submit your completed research paper for peer review and potential publication in academic journals or conference proceedings. View more about the tracks and paper submission process here.
                      </p>
                      <a className="text-indigo-500 inline-flex items-center pb-12  " href="/callforpapers">
                        Read More
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                          <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                      </a>
                    </div>
                  </a>
                </div>
                <div className="timeline">
                  <a className="timeline-content">
                    <span className="timeline-year">30th September</span>
                    <div className="timeline-icon">
                      <i className="fa-solid fa-envelope"></i>
                    </div>
                    <div className="content">
                      <h3 className="title">Notification of Acceptance</h3>
                      <p className="description hidden md:block">
                        Participants will recieve a formal notice confirming approval after submitting a paper for any track. View more about the tracks and paper submission process here.
                      </p>
                      <a className="text-indigo-500 inline-flex items-center pb-12 " href="/callforpapers">
                        Read More
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                          <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                      </a>
                    </div>
                  </a>
                </div>
                <div className="timeline">
                  <a className="timeline-content">
                    <span className="timeline-year">15th October</span>
                    <div className="timeline-icon">
                      <i className="fa-brands fa-readme pl-10"></i>
                    </div>
                    <div className="content">
                      <h3 className="title">Submission of Camera-Ready Paper</h3>
                      <p className="description hidden md:block">
                        Authors for ICDMT 2024 finalize their papers according to conference guidelines. This ensures accepted papers are ready for publication in proceedings, maintaining quality standards.</p>
                      <a className="text-indigo-500 inline-flex items-center pb-12 " href="/callforpapers" >
                        Read More
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                          <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                      </a>
                    </div>

                  </a>
                </div>
                <div className="timeline">
                  <a className="timeline-content">
                    <span className="timeline-year">15th September</span>
                    <div className="timeline-icon">
                      <i className="fa-solid fa-address-card"></i>
                    </div>
                    <div className="content">
                      <h3 className="title">Registration Commences</h3>
                      <p className="description hidden md:block" >
                        The opening of registration for ICDMT 2024, allowing participants to enroll for the conference. Attendees can secure their spots, access event details, and plan their participation in advance.</p>
                      <a className="text-indigo-500 inline-flex items-center pb-12 " href="/registration">
                        Read More
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                          <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                      </a>
                    </div>
                  </a>
                </div>
                <div className="timeline">
                  <a className="timeline-content">
                    <span className="timeline-year">25th October</span>
                    <div className="timeline-icon">
                      <i className="fa-solid fa-bullhorn"></i>
                    </div>
                    <div className="content">
                      <h3 className="title">Last Date of Online Registration</h3>
                      <p className="description hidden md:block">
                        The final deadline for participants to register for ICDMT 2024. After this date, registration closes, and attendees cannot enroll for the conference. It's crucial to complete registration before this deadline to ensure participation.</p>
                      <a className="text-indigo-500 inline-flex items-center pb-12 " href="/registration">
                        Read More
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                          <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                      </a>
                    </div>
                  </a>
                </div>
                {/* <div className="timeline">
          <a   className="timeline-content">
            <span className="timeline-year">2017</span>
            <div className="timeline-icon">
              <i className="fa fa-apple" aria-hidden="true"></i>
            </div>
            <div className="content">
              <h3 className="title">Laravel</h3>
              <p className="description">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
              </p>
            </div>
          </a>
        </div> */}
                {/* <div className="timeline">
          <a   className="timeline-content">
            <span className="timeline-year">2017</span>
            <div className="timeline-icon">
              <i className="fa fa-edit" aria-hidden="true"></i>
            </div>
            <div className="content">
              <h3 className="title">Creapure</h3>
              <p className="description">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
              </p>
            </div>
          </a>
        </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-4 space-x-4 flex-wrap">
        <a href="/callforpapers" className="inline-block px-3 py-2 mb-2 mr-4 ml-4 text-white bg-blue-500 border border-transparent rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white">
          Call for Papers
        </a>
        <a href="/impdates" className="inline-block px-3 py-2 mb-2 mr-4 ml-4 text-white bg-blue-500 border border-transparent rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white">
          View All Dates
        </a>
        <a href="/callforpapers" className="inline-block px-3 py-2 mb-2 ml-4 mr-4 text-white bg-green-500 border border-transparent rounded-md shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-white">
          Submit Abstract/Paper
        </a>
      </div>

    </div>

  )
}
