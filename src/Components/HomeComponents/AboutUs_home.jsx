import { Carousel } from "flowbite-react";
import useImageWithRetry from "../useImageWithRetry"
import first from './first.jpg'
import second from "./second.jpeg"
import third from "./third.jpeg"
import fourth from "./fourth.jpg"
import fifth from "./fifth.jpg"
import sixth from "./sixth.jpg"
import seventh from "./seventh.jpg"
import eight from "./eight.jpg"
import ninth from "./ninth.jpg"
import pec1 from './pec1.png'
import pec2 from './pec2.png'
import pec3 from './pec3.png'
import pec4 from './pec4.png'
import GR from './GRLogo.png'
import csirlogo from './csirlogo.png'
import csirbuilding from './csirbuilding.jpg'
export function AboutUs_home() {
  const RetryImageComponent = ({ src, alt, maxRetries = 3, retryInterval = 2000, className }) => {
    const { currentSrc, handleError, errorCount } = useImageWithRetry(src, maxRetries, retryInterval);

    return (
      <div>
        {errorCount < maxRetries ? (
          <img src={currentSrc} alt={alt} onError={handleError} className={className} />
        ) : (
          <p className="text-red-500">Failed to load image after {maxRetries} attempts.</p>
        )}
      </div>
    );
  };



  return (
    <div className="pt-10">
      <div className="container mx-auto">
        <div className=" mb-10">
          <h1 className="sm:text-5xl text-2xl font-medium title-font mb-2 text-gray-900">
            About Institute
          </h1>
          <div className="h-1 w-20  bg-indigo-500 rounded"></div>
        </div>
      </div>

      <section className="text-gray-600 body-font">
        <div className="container  mx-auto flex flex-col">
          <div className="mx-auto">
            <div className="rounded-lg overflow-hidden">
              <div className="relative h-[18rem] sm:h-[36rem]">
                <Carousel slideInterval={3000} infiniteLoop={true}>
                  <img src={pec1} alt="Century" className="w-full h-full object-cover" />
                  <img src={pec2} alt="Century" className="w-full h-full object-cover" />
                  <img src={pec3} alt="Century" className="w-full h-full object-cover" />
                  <img src={pec4} alt="Century" className="w-full h-full object-cover" />
                  <img src="https://ieeeindiscon.org/assets/images/college/audi.jpeg" alt="Audi" className="w-full h-full object-cover" />
                  <img src="https://ieeeindiscon.org/assets/images/college/helicopter.jpeg" alt="Helicopter" className="w-full h-full object-cover" />
                  <img src="https://ieeeindiscon.org/assets/images/college/chowk.jpeg" alt="Chowk" className="w-full h-full object-cover" />
                  <img src="https://ieeeindiscon.org/assets/images/college/century.jpeg" alt="Century" className="w-full h-full object-cover" />
                </Carousel>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:mt-10">
              <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400 mt-7">
                  <img src="https://latestgovtjobs.in/wp-content/uploads/2017/11/PEC-Logo-150x150.png" alt="Pec Logo" className="w-16 h-16" />
                </div>
                <div className="flex flex-col items-center text-center justify-center mt-4">
                  <h2 className="font-medium title-font mt-4 text-gray-900 text-2xl">Punjab Engineering College</h2>
                  <h2 className="font-medium title-font mt-1 text-gray-900 text-xl">Chandigarh</h2>
                  <div className="w-12 h-1 bg-indigo-500 rounded mt-4 mb-2 mx-auto"></div>
                </div>
              </div>
              <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                <p className="leading-relaxed text-xl mb-4 text-justify" ><a className="text-indigo-500 inline-flex items-center" href="https://pec.ac.in/" target="_blank" rel="noopener noreferrer">Punjab Engineering College (Deemed to be University) (PEC)</a> having its roots in Lahore as Mugalpura Engineering College since 1921, moved to its present campus in 1953 as PEC affiliated to Panjab University. The institute became Deemed University in 2003 through a MHRD notification and rechristened as PEC University of Technology in 2009. The institute offers 12 Undergraduate B. Tech. Programmes and 14 Post graduate M. Tech. Programmes in various disciplines of engineering and technology. After becoming University, the institute has also started PhD programme in various disciplines of engineering, science, management, humanities and social sciences. The admission to UG and PG programmes are made through national level examinations namely JEE (Mains) and GATE respectively.
                </p>
                <a className="text-indigo-500 inline-flex items-center" href="https://pec.ac.in/" target="_blank" rel="noopener noreferrer">
                  Learn More
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js"></script>
        <section className="sm:p-0 p-10" >
          <div className="bg-white transition-colors duration-500" style={{ backgroundColor: '#F0F8FF' }}>
            <h2 className="font-medium text-gray-900 text-2xl text-center mt-4 pb-5 ">History of Punjab Engineering College</h2>
            <div className="w-full mx-auto 2xl:max-w-7xl items-center flex flex-col  justify-center " >
              <div className=" border-t pb-8">
                <div className="bg-white rounded-2xl p-8 border">
                  <div className="mx-auto grid grid-cols-1 gap-8 overflow-hidden lg:mx-0 lg:grid-cols-5 px-6">
                    <div> <time datetime="August 2021" className="flex items-center text-2xl font-semibold leading-6 text-orange-600  "> <svg viewBox="0 0 4 4" className="mr-4 h-1 w-1 flex-none" aria-hidden="true">
                      <circle cx="2" cy="2" r="2" fill="currentColor"></circle>
                    </svg> 1921 <div className="absolute -ml-2 h-px w-screen -translate-x-full bg-gray-900/10    sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0" aria-hidden="true"></div> </time>
                      <p className="mt-6 text-2xl font-semibold leading-8 tracking-tight text-gray-900   "> Established in Lahore </p>
                      <p className="mt-1 text-xl text-pretty leading-7 text-black-500   "> Punjab Engineering College established in Lahore, Pakistan as Mugalpura Engineering college.</p>
                    </div>
                    <div> <time datetime="December 2021" className="flex items-center text-2xl font-semibold leading-6 text-orange-600  "> <svg viewBox="0 0 4 4" className="mr-4 h-1 w-1 flex-none" aria-hidden="true">
                      <circle cx="2" cy="2" r="2" fill="currentColor"></circle>
                    </svg> 1953 <div className="absolute -ml-2 h-px w-screen -translate-x-full bg-gray-900/10    sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0" aria-hidden="true"></div> </time>
                      <p className="mt-6 text-2xl font-semibold leading-8 tracking-tight text-gray-900  "> Moved to Chandigarh </p>
                      <p className="mt-1 text-xl text-pretty leading-7 text-black-500   "> Moved to its present campus in as Punjab Engineering College affiliated to Panjab University, Chandigarh. </p>
                    </div>
                    <div> <time datetime="February 2022" className="flex items-center text-2xl font-semibold leading-6 text-orange-600  "> <svg viewBox="0 0 4 4" className="mr-4 h-1 w-1 flex-none" aria-hidden="true">
                      <circle cx="2" cy="2" r="2" fill="currentColor"></circle>
                    </svg> 2003 <div className="absolute -ml-2 h-px w-screen -translate-x-full bg-gray-900/10    sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0" aria-hidden="true"></div> </time>
                      <p className="mt-6 text-2xl font-semibold leading-8 tracking-tight text-gray-900   "> Deemed University </p>
                      <p className="mt-1 text-xl text-pretty leading-7 text-black-500   "> The institute became Deemed University through a MHRD notification.</p>
                    </div>
                    <div> <time datetime="December 2022" className="flex items-center text-2xl font-semibold leading-6 text-orange-600  "> <svg viewBox="0 0 4 4" className="mr-4 h-1 w-1 flex-none" aria-hidden="true">
                      <circle cx="2" cy="2" r="2" fill="currentColor"></circle>
                    </svg> 2009 <div className="absolute -ml-2 h-px w-screen -translate-x-full bg-gray-900/10    sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0" aria-hidden="true"></div> </time>
                      <p className="mt-6 text-2xl font-semibold leading-8 tracking-tight text-gray-900   "> Rechristened</p>
                      <p className="mt-1 text-xl text-pretty leading-7 text-black-500  "> Punjab Engineering College rechristened as PEC University of Technology.</p>
                    </div>
                    <div> <time datetime="December 2022" className="flex items-center text-2xl font-semibold leading-6 text-orange-600  "> <svg viewBox="0 0 4 4" className="mr-4 h-1 w-1 flex-none" aria-hidden="true">
                      <circle cx="2" cy="2" r="2" fill="currentColor"></circle>
                    </svg> 2017 <div className="absolute -ml-2 h-px w-screen -translate-x-full bg-gray-900/10    sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0" aria-hidden="true"></div> </time>
                      <p className="mt-6 text-2xl font-semibold leading-8 tracking-tight text-gray-900  "> Name Restored  </p>
                      <p className="mt-1 text-xl text-pretty leading-7 text-black-500  "> The original name of the institute i.e. Punjab Engineering College with Deemed to be University in parenthesis is restored.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>

      <section className="text-gray-600 body-font">
        <div className="container  mx-auto flex flex-col">
          <div className="mx-auto">
            <div className="rounded-lg overflow-hidden">
              <div className="relative sm:h-[40rem] sm:w-full h-56">
                <Carousel slideInterval={3000} relative h-ful>
                  <img src={first} alt="..." />
                  <img src={second} alt="..." />
                  <img src={third} alt="..." />
                  <img src={fourth} alt="..." />
                  <img src={fifth} alt="..." />
                  <img src={sixth} alt="..." />
                  <img src={seventh} alt="..." />
                  <img src={eight} alt="..." />
                  <img src={ninth} alt="..." />
                </Carousel>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row mt-10">
              <div className="sm:w-1/3 text-center sm:pr-8 sm:pt-12">
                <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                  <img src="https://latestgovtjobs.in/wp-content/uploads/2017/11/PEC-Logo-150x150.png" alt="PEC logo" className="w-16 h-16" />
                </div>
                <div className="flex flex-col items-center text-center justify-center mt-4">
                  <h2 className="font-medium title-font mt-4 text-gray-900 text-2xl">Department of Mechanical Engineering</h2>
                  <h3 className="font-medium title-font mt-1 text-gray-900 text-xl">Punjab Engineering College , Chandigarh</h3>
                  <div className="w-12 h-1 bg-indigo-500 rounded mt-4 mb-2 mx-auto"></div>
                </div>
              </div>
              <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                <p className="leading-relaxed text-xl mb-4 text-justify" >The Department of Mechanical Engineering at Punjab Engineering College is as old as the Institute itself. The Department is continuously striving to achieve excellence in education, academic and industry-oriented research to prepare the manpower that are globally competitive and capable of leading in industry, academia and government organizations in both India and abroad. Besides the Bachelor degree, Department offer Master and Ph.D. programme also. Currently, the Department has an intake of 120 students at B. Tech level and 25 students at M. Tech. level. Under Ph.D. programme at the Department, the major research areas include Advanced /non-traditional machining processes, Micro-manufacturing, CAD/CAM, MEMS, Soft computing in Design and Manufacturing, Composites, Bio-materials, and so on.
                </p>
                <a className="text-indigo-500 inline-flex items-center" href="https://pec.ac.in/me" target="_blank" rel="noopener noreferrer">
                  Learn More
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

      </section>
      <section className="text-gray-600 body-font">
        <div className="container  mx-auto flex flex-col">
          <div className="mx-auto">
            <div className="rounded-lg overflow-hidden">
              <img alt="content" className="object-cover object-center h-64 w-full" src="https://topotoolbox.files.wordpress.com/2023/10/1600x-22.jpg"></img>
            </div>
            <div className="flex flex-col sm:flex-row sm:mt-10">
              <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                <div className="w-24 h-24 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400 mt-10">
                  <img src={GR} alt="IIT-R Logo" className="w-full h-20" />
                </div>
                <div className="flex flex-col items-center text-center justify-center mt-4">
                  <h2 className="font-medium title-font mt-4 text-gray-900 text-2xl"> Design Innovation Center</h2>
                  <h2 className="font-medium title-font mt-4 text-gray-900 text-xl">Indian Institute of Technology, Roorkee</h2>
                  <div className="w-12 h-1 bg-indigo-500 rounded mt-4 mb-2 mx-auto"></div>
                </div>
              </div>
              <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                <p className="leading-relaxed text-xl mb-4 text-justify" >Indian Institute of Technology Roorkee (IIT Roorkee) is among the foremost of the institutes of national importance in higher education. The Institute has been a trend-setter in the area of education and research in the field of science, technology, and engineering with its glorious history of more than 170 years. The Design Innovation Center (DIC), named नवोन्मेष, is one of the twenty DICs being set up in the country by the Ministry of Human Resource Development (MHRD), Government of India under the national initiative for setting up of Design Innovation Center, Open Design School and National Design Innovation Network. The center will thrive for developing design and innovation as a culture while primarily addressing the relevant problems of the North-West Himalayan region and other national priority areas. It dovetails the presence of three partner institutes (spokes) – Indian Institute of Management (IIM) Kashipur, National Institute of Technology Uttarakhand (NITUK) and G B Pant University of Agriculture & Technology (GBPUA&T).</p>
                <a className="text-indigo-500 inline-flex items-center" href="https://www.iitr.ac.in/dic/" target="_blank" rel="noopener noreferrer">
                  Learn More
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font">
        <div className="container  mx-auto flex flex-col">
          <div className="mx-auto">
            <div className="rounded-lg overflow-hidden">
              <img alt="content" className="object-cover object-center h-96 w-full" src={csirbuilding}></img>
            </div>
            <div className="flex flex-col sm:flex-row sm:mt-10">
              <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-white mt-10">
                  <img src={csirlogo} alt="IIT-R Logo" className="w-full h-20" />
                </div>
                <div className="flex flex-col items-center text-center justify-center mt-4">
                  <h2 className="font-medium title-font mt-4 text-gray-900 text-2xl"> CSIR-CSIO</h2>
                  <h2 className="font-medium title-font mt-4 text-gray-900 text-xl">Central Scientific Instruments Organisation</h2>
                  <div className="w-12 h-1 bg-indigo-500 rounded mt-4 mb-2 mx-auto"></div>
                </div>
              </div>
              <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                <p className="leading-relaxed text-xl mb-4 text-justify" >Central Scientific Instruments Organisation (CSIO), a constituent unit of Council of Scientific & Industrial Research (CSIR), is a premier national laboratory dedicated to research, design and development of scientific and industrial instruments. It is a multi-disciplinary and multi-dimensional apex industrial research & development organisation in the country to stimulate growth of Instrument Industry in India covering wide range and applications.CSIO is a multi-disciplinary organization having well equipped laboratories manned by highly qualified and well trained staff with infrastructural facilities in the areas of Agrionics; Medical Instrumentation and Prosthetic Devices; Optics and Cockpit based Instrumentation; Fiber/Laser Optics based Sensors & Instrumentation; Analytical Instrumentation; Advanced Materials based Transducers etc. Large number of instruments ranging from simple to highly sophisticated ones, have been designed and developed by the Institute and their know-hows have been passed on to the industry for commercial exploitation. Having contributed substantially towards the growth of the scientific instruments industry in the country, CSIO enjoys high degree of credibility among the users of the instruments as well as the instrument industry.</p>
                <a className="text-indigo-500 inline-flex items-center" href="https://www.iitr.ac.in/dic/" target="_blank" rel="noopener noreferrer">
                  Learn More
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
