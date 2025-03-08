import Typewriter from "typewriter-effect";
import React from 'react';
import { Table } from "flowbite-react";
export function Sponsorship() {
  const platinumBenefits = [
    {
      title: "Exclusive Branding",
      description: "Prominent placement of your company logo on all conference promotional materials, including website, banners, brochures, and press releases. Recognition as the exclusive Platinum Sponsor in all pre-event and on-site communications."
    },
    {
      title: "Keynote Session Opportunity",
      description: "Exclusive opportunity to present a keynote session or participate in a high-profile panel discussion during the conference. Recognition as the Platinum Sponsor during the opening and closing ceremonies."
    },
    {
      title: "Digital Visibility",
      description: "Featured spotlight on the conference website with a dedicated Platinum Sponsor profile, including a company overview, logo, and link to your website. Regular acknowledgment on conference-related social media platforms with tailored posts highlighting your Platinum Sponsorship."
    },
    {
      title: "Exhibition Space",
      description: "Premium exhibition space in a high-traffic area with a dedicated booth showcasing your products/services. Opportunity to organize product demonstrations and engage with conference attendees."
    },
    {
      title: "Complimentary Registrations",
      description: "Complimentary conference registrations for 5 representatives from your company, allowing access to all conference sessions and activities."
    },
    {
      title: "Networking Opportunities",
      description: "Exclusive access to VIP networking events, facilitating interactions with key speakers, organizers, and other influential participants. Recognition as the Platinum Sponsor in all networking materials."
    },
    {
      title: "Branding in Conference Proceedings",
      description: "Prominent recognition in the official conference proceedings, including your logo on the cover and a full-page acknowledgment of your Platinum Sponsorship."
    },
    {
      title: "Customized Collaborations",
      description: "Tailored opportunities for collaboration, such as sponsoring a specific track or workshop aligned with your company's interests. Consultation to identify and implement customized engagement strategies to maximize the impact of your sponsorship."
    },
    {
      title: "Post-Event Recognition",
      description: "Acknowledgment in post-event communications, thank-you letters, and reports. Recognition as a key contributor to the success of the conference in post-conference press releases."
    },
    {
      title: "Exclusive Deliverables",
      description: "Exclusive rights to distribute promotional materials or branded items to conference attendees. First consideration for any exclusive sponsorship-related opportunities that may arise during the planning process."
    }
  ];
  const goldBenefits = [
    {
      title: "Keynote Session Opportunity",
      description: "Exclusive opportunity to present a keynote session or participate in a high-profile panel discussion during the conference. Recognition as the Gold Sponsor during the opening and closing ceremonies."
    },
    {
      title: "Digital Visibility",
      description: "Featured spotlight on the conference website with a dedicated Gold Sponsor profile, including a company overview, logo, and link to your website."
    },
    {
      title: "Exhibition Space",
      description: "Exhibition space with a dedicated booth showcasing your products/services. Opportunity to organize product demonstrations and engage with conference attendees."
    },
    {
      title: "Complimentary Registrations",
      description: "Complimentary conference registrations for 4 representatives from your company, allowing access to all conference sessions and activities."
    },
    {
      title: "Networking Opportunities",
      description: "Exclusive access to VIP networking events, facilitating interactions with key speakers, organizers, and other influential participants. Recognition as the Gold Sponsor in all networking materials."
    },
    {
      title: "Branding in Conference Proceedings",
      description: "Prominent recognition in the official conference proceedings, including your logo on the back of front page and a full-page acknowledgment of your Gold Sponsorship."
    },
    {
      title: "Customized Collaborations",
      description: "Tailored opportunities for collaboration, such as sponsoring a specific track or workshop aligned with your company's interests. Consultation to identify and implement customized engagement strategies to maximize the impact of your sponsorship."
    },
    {
      title: "Post-Event Recognition",
      description: "Acknowledgment in post-event communications, thank-you letters, and reports. Recognition as a key contributor to the success of the conference in post-conference press releases."
    },
    {
      title: "Exclusive Deliverables",
      description: "Exclusive rights to distribute promotional materials or branded items to conference attendees."
    }
  ];
  const silverBenefits = [
    {
      title: "Keynote Session Opportunity",
      description: "Exclusive opportunity to present a keynote session or participate in a high-profile panel discussion during the conference. Recognition as the Silver Sponsor during the opening and closing ceremonies."
    },
    {
      title: "Digital Visibility",
      description: "Featured spotlight on the conference website with a dedicated Silver Sponsor profile, including a company overview, logo, and link to your website."
    },
    {
      title: "Exhibition Space",
      description: "Exhibition space with a dedicated booth showcasing your products/services. Opportunity to organize product demonstrations and engage with conference attendees."
    },
    {
      title: "Complimentary Registrations",
      description: "Complimentary conference registrations for 3 representatives from your company, allowing access to all conference sessions and activities."
    },
    {
      title: "Networking Opportunities",
      description: "Exclusive access to VIP networking events, facilitating interactions with key speakers, organizers, and other influential participants. Recognition as the Silver Sponsor in all networking materials."
    },
    {
      title: "Customized Collaborations",
      description: "Tailored opportunities for collaboration, such as sponsoring a specific track or workshop aligned with your company's interests. Consultation to identify and implement customized engagement strategies to maximize the impact of your sponsorship."
    },
    {
      title: "Post-Event Recognition",
      description: "Acknowledgment in post-event communications, thank-you letters, and reports. Recognition as a key contributor to the success of the conference in post-conference press releases."
    },
    {
      title: "Exclusive Deliverables",
      description: "Exclusive rights to distribute promotional materials or branded items to conference attendees."
    }
  ];
  const bronzeBenefits = [
    {
      title: "Keynote Session Opportunity",
      description: "Exclusive opportunity to present a keynote session or participate in a high-profile panel discussion during the conference. Recognition as the Bronze Sponsor during the opening and closing ceremonies."
    },
    {
      title: "Exhibition Space",
      description: "Exhibition space with a dedicated booth showcasing your products/services. Opportunity to organize product demonstrations and engage with conference attendees."
    },
    {
      title: "Complimentary Registrations",
      description: "Complimentary conference registrations for 2 representatives from your company, allowing access to all conference sessions and activities."
    },
    {
      title: "Networking Opportunities",
      description: "Exclusive access to VIP networking events, facilitating interactions with key speakers, organizers, and other influential participants. Recognition as the Bronze Sponsor in all networking materials."
    },
    {
      title: "Customized Collaborations",
      description: "Tailored opportunities for collaboration, such as sponsoring a specific track or workshop aligned with your company's interests. Consultation to identify and implement customized engagement strategies to maximize the impact of your sponsorship."
    },
    {
      title: "Post-Event Recognition",
      description: "Acknowledgment in post-event communications, thank-you letters, and reports. Recognition as a key contributor to the success of the conference in post-conference press releases."
    },
    {
      title: "Exclusive Deliverables",
      description: "Exclusive rights to distribute promotional materials or branded items to conference attendees."
    }
  ];
  return (
    <div style={{ backgroundColor: '#F0F8FF' }}>
      <section className="text-gray-600 body-font">
        <div className="px-10 mx-auto">

          <div className="  mx-auto flex flex-col items-center justify-center">
            <div className="flex flex-wrap justify-center items-center w-full mb-2">
              <div className="lg:w-full lg:mb-0 pt-10 text-center">
                <h1 className="sm:text-5xl text-2xl font-medium title-font mb-2 text-gray-900">
                  <Typewriter onInit={(typewriter) => {
                    typewriter
                      .typeString("Sponsorship")
                      .pauseFor(1500)
                      .start();
                  }} />
                </h1>
                <div className="h-1 w-20 bg-indigo-500 rounded mx-auto"></div>
              </div>
            </div>
            
            <div className=" sm:pl-8 sm:py-8 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
              <p className="leading-relaxed text-xl mb-4 text-justify" >ICDMT 2024 offers you a unique and focused way to showcase your service, technology and solutions, explore opportunities to outreach your potential customers and touch base with them. Our Sponsorship packages are provided with a set of special privileges and a clear focus on your promotion during the conference. We are excited to invite you to participate as an exhibitor or sponsor at our upcoming IDCMT 2024 at Punjab Engineering College, Chandigarh, India. We encourage you to take advantage of the enclosed exhibitor and sponsorship opportunities while they last as we have a limited number of exhibitor spaces and they will be filled on a first-come, first-served basis. Becoming a sponsor/exhibitors you will become a part of one of the largest technology conferences in asia pacific, world's largest organization for technology professionals, network with 700+ participants - top officials from India and global tech industry; representatives from Several countries; strong pre/post event media & online coverage; multiple industry/academia partnership opportunities; join our team of 20+ long term industry partners.
              </p>
            
            <div className="container mx-auto">
              <div className=" mb-10">
                <div className=" mb-10">
                  <div className="flex flex-wrap justify-center items-center w-full mb-2">
                    <div className="lg:w-full lg:mb-0 pt-10 text-center">
                      <h1 className="sm:text-5xl text-2xl font-medium title-font mb-4 text-gray-900">
                        Our Sponsors
                      </h1>
                      <div className="h-1 w-20 bg-indigo-500 rounded mx-auto"></div>
                    </div>
                  </div>

                </div>

              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:mt-10">
              <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                <div className="w-24 h-24 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400 mt-10">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnkk0FBoJ7gnuhJ9IOfPj88sZxcxWjejZ-Fg&s" alt="DEE Logo" className="w-full h-full rounded-full" />
                </div>
                <div className="flex flex-col items-center text-center justify-center mt-4">
                  <h2 className="font-medium title-font mt-4 text-gray-900 text-2xl">DEE Piping Systems</h2>
                  <h2 className="font-medium title-font mt-4 text-gray-900 text-xl"></h2>
                  <div className="w-12 h-1 bg-indigo-500 rounded mt-4 mb-2 mx-auto"></div>
                </div>
              </div>
              <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                <p className="leading-relaxed text-xl mb-4 text-justify" >DEE Development Engineers Limited was Incorporated by the Chairman & Managing Director Mr. K.L. Bansal in the year 1988. We are an engineering company providing specialized process piping solutions for industries such as oil and gas, power (including nuclear), chemicals and other process industries through engineering, procurement and manufacturing. We have manufacturing experience of over three and a half decades and have been able to leverage our brand, strategically located manufacturing facilities and engineering capabilities to successfully expand our business.</p>
                <a className="text-indigo-500 inline-flex items-center" href="https://www.iitr.ac.in/dic/" target="_blank" rel="noopener noreferrer">
                  Learn More
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:mt-10">
              <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                <div className="w-24 h-24 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400 mt-10">
                  <img src="https://upload.wikimedia.org/wikipedia/en/e/e1/Science_and_Engineering_Research_Board.png" alt="SERB Logo" className="w-full h-full rounded-full" />
                </div>
                <div className="flex flex-col items-center text-center justify-center mt-4">
                  <h2 className="font-medium title-font mt-4 text-gray-900 text-2xl">SERB India</h2>
                  <h2 className="font-medium title-font mt-4 text-gray-900 text-xl"></h2>
                  <div className="w-12 h-1 bg-indigo-500 rounded mt-4 mb-2 mx-auto"></div>
                </div>
              </div>
              <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                <p className="leading-relaxed text-xl mb-4 text-justify" >SERB aims to build up best management systems which would match the best global practices in the area of promotion and funding of basic research.The Science and Engineering Research Board (SERB) is a statutory body established through an Act of Parliament. Supporting basic research in emerging areas of Science & Engineering are the primary and distinctive mandate of the Board. The Board structure, with both financial and administrative powers vested in the Board, would enable quicker decisions on research issues, greatly improving thereby our responsiveness to the genuine needs of the research scientists and the S&T system.</p>
                <a className="text-indigo-500 inline-flex items-center" href="https://www.iitr.ac.in/dic/" target="_blank" rel="noopener noreferrer">
                  Learn More
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>

            </div>
            <div className="container mx-auto">
              <div className=" mb-10">
                <div className=" mb-10">
                  <div className="flex flex-wrap justify-center items-center w-full mb-2">
                    <div className="lg:w-full lg:mb-0 pt-10 text-center">
                      <h1 className="sm:text-5xl text-2xl font-medium title-font mb-4 text-gray-900">
                        Sponsorship Packages
                      </h1>
                      <div className="h-1 w-20 bg-indigo-500 rounded mx-auto"></div>
                    </div>
                  </div>

                </div>

              </div>
            </div>
            <div className="overflow-x-auto">
              <Table hoverable className="w-full border border-gray-300 rounded-lg ">
                <Table.Head>
                  <Table.HeadCell className="whitespace-nowrap font-medium text-lg border border-gray-300 bg-gray-100 sm:py-10 sm:px-20 p-4">Category</Table.HeadCell>
                  <Table.HeadCell className="whitespace-nowrap font-medium text-lg border border-gray-300 bg-gray-100 sm:py-10 sm:px-20 p-4">Price</Table.HeadCell>
                </Table.Head>
                <Table.Body>
                  <Table.Row className="bg-white">
                    <Table.Cell className="whitespace-nowrap font-medium text-lg text-gray-900 border border-gray-300 sm:py-10 sm:px-20 p-4">Platinum</Table.Cell>
                    <Table.Cell className="whitespace-nowrap font-medium text-lg text-gray-900 border border-gray-300 sm:py-10 sm:px-20 p-4">Rs. 5,00,000/-
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row className="bg-white">
                    <Table.Cell className="whitespace-nowrap font-medium text-lg text-gray-900 border border-gray-300 sm:py-10 sm:px-20 p-4">Gold</Table.Cell>
                    <Table.Cell className="whitespace-nowrap font-medium text-lg text-gray-900 border border-gray-300 sm:py-10 sm:px-20 p-4">Rs. 4,00,000/-
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row className="bg-white">
                    <Table.Cell className="whitespace-nowrap font-medium text-lg text-gray-900 border border-gray-300 sm:py-10 sm:px-20 p-4">Silver</Table.Cell>
                    <Table.Cell className="whitespace-nowrap font-medium text-lg text-gray-900 border border-gray-300 sm:py-10 sm:px-20 p-4">Rs. 2,50,000/- </Table.Cell>
                  </Table.Row>
                  <Table.Row className="bg-white">
                    <Table.Cell className="whitespace-nowrap font-medium text-lg text-gray-900 border border-gray-300 sm:py-10 sm:px-20 p-4">Bronze</Table.Cell>
                    <Table.Cell className="whitespace-nowrap font-medium text-lg text-gray-900 border border-gray-300 sm:py-10 sm:px-20 p-4">Rs. 2,00,000/- </Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>
            </div>
          </div>
          <div className=" mb-10">
            <div className="flex flex-wrap justify-center items-center w-full mb-2">
              <div className="lg:w-full lg:mb-0 pt-10 text-center">
                <h1 className="sm:text-5xl text-2xl font-medium title-font mb-4 text-gray-900">
                  Sponsorship Benefits
                </h1>
                <div className="h-1 w-20 bg-indigo-500 rounded mx-auto"></div>
              </div>
            </div>

          </div>
          <section className="text-gray-600 body-font overflow-hidden">
            <div className="container mx-auto">
              <div className="-my-8 divide-y-2 divide-gray-100">
                <div className="py-8 flex flex-wrap md:flex-nowrap">
                  <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                    <span className="font-semibold title-font text-gray-700 pt-5">PLATINUM</span>

                  </div>
                  <div className="md:flex-grow">
                    <h1 className="text-2xl font-medium text-gray-900 title-font mb-2">Benefits of Platinum Sponsorship</h1>
                    <div className="h-1 w-20  bg-indigo-500 rounded mb-8"></div>
                    {platinumBenefits.map((benefit, index) => (
                      <div key={index} className="mb-4">
                        <h2 className="text-xl font-semibold text-gray-900">{benefit.title}</h2>
                        <p className="leading-relaxed">{benefit.description}</p>
                      </div>
                    ))}
                    <a className="text-indigo-500 inline-flex items-center mt-4">Learn More
                      <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="text-gray-600 body-font overflow-hidden pt-10">
            <div className="container mx-auto">
              <div className="-my-8 divide-y-2 divide-gray-100">
                <div className="py-8 flex flex-wrap md:flex-nowrap">
                  <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                    <span className="font-semibold title-font text-gray-700 pt-5">GOLD</span>
                  </div>
                  <div className="md:flex-grow">
                    <h1 className="text-2xl font-medium text-gray-900 title-font mb-2">Benefits of Gold Sponsorship</h1>
                    <div className="h-1 w-20  bg-indigo-500 rounded mb-4"></div>
                    {goldBenefits.map((benefit, index) => (
                      <div key={index} className="mb-4">
                        <h2 className="text-xl font-semibold text-gray-900">{benefit.title}</h2>
                        <p className="leading-relaxed">{benefit.description}</p>
                      </div>
                    ))}
                    <a className="text-indigo-500 inline-flex items-center mt-4">Learn More
                      <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="text-gray-600 body-font overflow-hidden pt-10">
            <div className="container mx-auto">
              <div className="-my-8 divide-y-2 divide-gray-100">
                <div className="py-8 flex flex-wrap md:flex-nowrap">
                  <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                    <span className="font-semibold title-font text-gray-700 pt-5">SILVER</span>
                  </div>
                  <div className="md:flex-grow">
                    <h1 className="text-2xl font-medium text-gray-900 title-font mb-2">Benefits of Silver Sponsorship</h1>
                    <div className="h-1 w-20  bg-indigo-500 rounded mb-4"></div>
                    {silverBenefits.map((benefit, index) => (
                      <div key={index} className="mb-4">
                        <h2 className="text-xl font-semibold text-gray-900">{benefit.title}</h2>
                        <p className="leading-relaxed">{benefit.description}</p>
                      </div>
                    ))}
                    <a className="text-indigo-500 inline-flex items-center mt-4">Learn More
                      <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="text-gray-600 body-font overflow-hidden pt-10 pb-10">
            <div className="container mx-auto">
              <div className="-my-8 divide-y-2 divide-gray-100">
                <div className="py-8 flex flex-wrap md:flex-nowrap">
                  <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                    <span className="font-semibold title-font text-gray-700 pt-5">BRONZE</span>
                  </div>
                  <div className="md:flex-grow">
                    <h1 className="text-2xl font-medium text-gray-900 title-font mb-2">Benefits of Bronze Sponsorship</h1>
                    <div className="h-1 w-20  bg-indigo-500 rounded mb-4"></div>
                    {bronzeBenefits.map((benefit, index) => (
                      <div key={index} className="mb-4">
                        <h2 className="text-xl font-semibold text-gray-900">{benefit.title}</h2>
                        <p className="leading-relaxed">{benefit.description}</p>
                      </div>
                    ))}
                    <a className="text-indigo-500 inline-flex items-center mt-4">Learn More
                      <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

      </section>
    </div>
  )
}
