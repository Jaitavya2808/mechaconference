import React from 'react'
import Typewriter from 'typewriter-effect';

function PublicationPartner() {
    return (
        <div className='bg-[#F0F8FF] flex justify-center s:p-2 xs:p-2'>
            <div className="lg:w-full lg:mb-0 pt-10 text-center">
                <h1 className="sm:text-5xl text-2xl font-medium title-font mb-2 text-gray-900">
                    <Typewriter onInit={(typewriter) => {
                        typewriter
                            .typeString("Publication Partners")
                            .pauseFor(1500)
                            .start();
                    }} />
                </h1>
                <div className="h-1 w-20 bg-indigo-500 rounded mx-auto"></div>
                <p className='text-2xl pt-10 text-bold px-20 text-blue-800 font-bold'>
            Select papers from the conference will be published by Springer as a proceedings book volume. Springer will conduct quality checks on the accepted papers and only papers that pass these checks will be published.
            </p>
            <p className='text-2xl pt-10 text-bold px-20 text-blue-800 font-bold'>
            Springer Nature does not charge any money for publication of Non-Open Access content. Abstracts/extended abstracts and short papers (less than 4 pages) are not considered for publication.
            </p>
            <p className='text-3xl font-semibold p-10'>
                Lecture Notes in Mechanical Engineering - Book series. Published by Springer and indexed by scopus.
            </p>
            <div className='flex flex-col xs:flex-col sm:flex-row justify-center h-1/6 m-10'>
                <img src='https://icssmt.com/2023/Springer.png' className='rounded-lg h-1/2 my-auto mx-10'/>
                <img src='https://www.universitetam.ru/images/cover_lnme.webp' className='rounded-lg mt-4 mx-10'/>
            </div>
                <p className='text-2xl pt-10 text-bold px-20 text-blue-800 font-bold'>
                    Selected papers out of the papers presented in ICDMT 2024 will be  recommended for publication in journal of Composites and Advanced Materials by Sage publications having an impact factor of 1.7 after rigorous peer review by the journal.
                </p>
                <p className='text-2xl pt-10 text-bold px-20 text-blue-800 font-bold'>
                    The decision to accept or reject papers is at the sole discretion of chief editor.
                </p>
                <p className='text-3xl font-semibold p-10'>
                    Journal of Composites and Advanced Materials by Sage Publications
                </p>
                <div className='flex flex-col xs:flex-col sm:flex-row justify-center h-1/6 mt-10'>
                    <img src='https://journals.sagepub.com/cms/10.1177/ACMB_33/asset/176f6308-bb17-f630-1bb1-6f63081bb176/cover.jpg' className='rounded-lg h-96 sm:h-96 mt-10 mx-10' />
                </div>
            </div>
        </div>
    )
}

export default PublicationPartner
