import { useNavigate } from "react-router-dom";
import { Table } from "flowbite-react";
export function Registration_home() {
    const navigate = useNavigate();
    return (
        <div className="mx-auto flex flex-col text-gray-900">
            <div className="px-5 py-5 mx-auto flex flex-col">
                <div className="flex flex-wrap w-full mb-4 mx-auto">
                    <div className="lg:w-full lg:mb-0 pt-10">
                        <h1 className="sm:text-6xl text-3xl font-medium title-font mb-4">
                            Registration
                        </h1>
                        <div className="h-1 w-20 bg-indigo-500 rounded"></div>
                    </div>
                </div>
            </div>
            <div className="sm:mx-auto overflow-x-auto px-4">
                <Table hoverable className="border border-gray-300 rounded-lg relative">
                    <div className="absolute inset-0 z-0">
                        <img src="https://img.freepik.com/free-photo/view-arrangement-with-keyboard-notebooks_23-2148847749.jpg?size=626&ext=jpg&ga=GA1.1.553209589.1715212800&semt=ais_user" alt="background" className="object-cover w-full h-full opacity-10 rounded-lg" />
                    </div>
                    <Table.Head className="relative z-10">
                        <Table.HeadCell className="whitespace-nowrap font-medium sm:text-2xl text-sm border border-gray-300 bg-gray-100 rounded-t-lg sm:p-10">Category</Table.HeadCell>
                        <Table.HeadCell className="whitespace-nowrap font-medium sm:text-2xl text-sm border border-gray-300 bg-gray-100 sm:p-8">Indian Participants <p className="sm:text-xl text-sm pt-3">(Inclusive of GST)</p></Table.HeadCell>
                        <Table.HeadCell className="whitespace-nowrap font-medium sm:text-2xl text-sm border border-gray-300 bg-gray-100 sm:p-10">Foreign Participants</Table.HeadCell>
                    </Table.Head>
                    <Table.Body className="divide-y">
                        <Table.Row className="bg-white">
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 sm:text-2xl text-sm border border-gray-300 sm:p-8">Students</Table.Cell>
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 sm:text-2xl text-sm border border-gray-300 sm:p-8">Rs. 4,720/-</Table.Cell>
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 sm:text-2xl text-sm border border-gray-300 sm:p-8">USD 150</Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white">
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 sm:text-2xl text-sm border border-gray-300 sm:p-8">Faculty/ Academia</Table.Cell>
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 sm:text-2xl text-sm border border-gray-300 sm:p-8">Rs. 8,260/-</Table.Cell>
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 sm:text-2xl text-sm border border-gray-300 sm:p-8">USD 250</Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white">
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 sm:text-2xl text-sm border border-gray-300 sm:p-8">Industry/R&D Organization</Table.Cell>
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 sm:text-2xl text-sm border border-gray-300 sm:p-8">Rs. 11,800/-</Table.Cell>
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 sm:text-2xl text-sm border border-gray-300 sm:p-8">USD 450</Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
            </div>
            <div>
            </div>
            <div className="px-4 md:px-10 flex justify-center items-center h-full mx-auto">
                <div className="mx-auto sm:px-24 px-4">
                    <div className="flex flex-col mt-6">
                        <div className=" border-gray-300 mt-4 pt-4  text-left">
                            <p className="text-lg text-justify px-4">
                                <i className="fa-solid fa-hand-point-right pr-2"></i> Conference registration fee includes paper presentation, entry to all sessions and keynote speeches, conference presentation certificate and publication in conference proceedings. The additional cost may be applicable for publication in SCOPUS or Web of Science indexed / UGC care journals.
                            </p>
                        </div>
                    </div>
                    <div className="border-t border-gray-300 pt-4 text-left px-4">
                        <p className="text-lg mb-4 text-justify">
                            <i className="fa-solid fa-hand-point-right pr-2"></i> The registration fees mentioned are applicable for conference registration and authors need to complete the registration after the acceptance of paper. The conference fee once paid is non-refundable.
                        </p>
                    </div>
                    <div className="border-t border-gray-300 pt-4 text-left px-4">
                        <p className="text-lg mb-4 text-justify">
                            <i className="fa-solid fa-hand-point-right pr-2"></i> The decision about the acceptance of paper for final publication will be entirely taken by the Editor in Chief. Conference organizers and or journal editors reserve the right to remove the paper at any stage from the publication process because of non ensuring the paper quality and or ethical guidelines by the authors.
                        </p>
                    </div>
                    <p className="text-2xl text-center text-red-600 pt-10">Please note : Registration fees is non-refundable.</p>
                    <div className="flex justify-center">
                        <a className="bg-indigo-500 hover:bg-indigo-600 text-white text-lg px-6 py-2 rounded-xl inline-block mt-10 mb-5" href="/registration">Proceed To Register</a>
                    </div>
                </div>
            </div>

        </div>
    );
}
