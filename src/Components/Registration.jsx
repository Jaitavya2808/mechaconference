import Typewriter from "typewriter-effect";
import { Table } from "flowbite-react";
import reg_qr from './reg_qr.png'
export function Registration() {
    return (
        <div className="bg-blue-50 mx-auto flex flex-col text-gray-900">
            <div className="container mx-auto  py-8 sm:py-12 flex flex-col text-gray-900">
                <div className="text-center mb-8">
                    <h1 className="sm:text-4xl text-2xl font-medium text-gray-900 mb-2">
                        <Typewriter onInit={(typewriter) => {
                            typewriter
                                .typeString("REGISTRATION")
                                .pauseFor(1500)
                                .start();
                        }} />
                    </h1>
                    <div className="h-1 w-20 bg-blue-500 rounded mx-auto mb-4"></div>
                </div>

                <div className="overflow-x-auto">
                    <Table hoverable className="w-full border border-gray-300 rounded-lg">
                        <Table.Head>
                            <Table.HeadCell className="whitespace-nowrap font-medium text-lg border border-gray-300 bg-gray-100 p-4">Category</Table.HeadCell>
                            <Table.HeadCell className="whitespace-nowrap font-medium text-lg border border-gray-300 bg-gray-100 p-4">Indian Participants</Table.HeadCell>
                            <Table.HeadCell className="whitespace-nowrap font-medium text-lg border border-gray-300 bg-gray-100 p-4">Foreign Participants</Table.HeadCell>
                        </Table.Head>
                        <Table.Body>
                            <Table.Row className="bg-white">
                                <Table.Cell className="whitespace-nowrap font-medium text-lg text-gray-900 border border-gray-300 p-4">Students</Table.Cell>
                                <Table.Cell className="whitespace-nowrap font-medium text-lg text-gray-900 border border-gray-300 p-4">Rs. 4,720/-</Table.Cell>
                                <Table.Cell className="whitespace-nowrap font-medium text-lg text-gray-900 border border-gray-300 p-4">USD 150</Table.Cell>
                            </Table.Row>
                            <Table.Row className="bg-white">
                                <Table.Cell className="whitespace-nowrap font-medium text-lg text-gray-900 border border-gray-300 p-4">Faculty/Academia</Table.Cell>
                                <Table.Cell className="whitespace-nowrap font-medium text-lg text-gray-900 border border-gray-300 p-4">Rs. 8,260/-</Table.Cell>
                                <Table.Cell className="whitespace-nowrap font-medium text-lg text-gray-900 border border-gray-300 p-4">USD 250</Table.Cell>
                            </Table.Row>
                            <Table.Row className="bg-white">
                                <Table.Cell className="whitespace-nowrap font-medium text-lg text-gray-900 border border-gray-300 p-4">Industry/R&D Organization</Table.Cell>
                                <Table.Cell className="whitespace-nowrap font-medium text-lg text-gray-900 border border-gray-300 p-4">Rs. 11,800/-</Table.Cell>
                                <Table.Cell className="whitespace-nowrap font-medium text-lg text-gray-900 border border-gray-300 p-4">USD 450</Table.Cell>
                            </Table.Row>
                        </Table.Body>
                    </Table>
                </div>
                <div className="flex flex-col lg:flex-row space-x-0 lg:space-x-3 border-r-black overflow-x-auto">
                    <div className="overflow-x-auto w-full lg:w-2/3">
                        <p className="text-xl pt-5 mt-5 w-full lg:w-2/3">Registration fees for Indian participants will be paid to the below bank details : </p>

                        <table className="w-full mt-8 border border-gray-300 rounded-lg">
                            <thead>
                                <tr>
                                    <th className="font-medium text-lg border border-gray-300 bg-gray-100 p-4 whitespace-normal text-left">Beneficiary Name</th>
                                    <th className="font-medium text-lg border border-gray-300 bg-gray-100 p-4 whitespace-normal text-left">Punjab Engineering College (Registration / Applications A/c)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="bg-white">
                                    <td className="whitespace-normal font-medium text-lg text-gray-900 border border-gray-300 p-4">Bank</td>
                                    <td className="whitespace-normal font-medium text-lg text-gray-900 border border-gray-300 p-4">State Bank of India</td>
                                </tr>
                                <tr className="bg-white">
                                    <td className="whitespace-normal font-medium text-lg text-gray-900 border border-gray-300 p-4">Account No.</td>
                                    <td className="whitespace-normal font-medium text-lg text-gray-900 border border-gray-300 p-4">39083056639</td>
                                </tr>
                                <tr className="bg-white">
                                    <td className="whitespace-normal font-medium text-lg text-gray-900 border border-gray-300 p-4">IFSC</td>
                                    <td className="whitespace-normal font-medium text-lg text-gray-900 border border-gray-300 p-4">SBIN0002452</td>
                                </tr>
                                <tr className="bg-white">
                                    <td className="whitespace-normal font-medium text-lg text-gray-900 border border-gray-300 p-4">MICRO</td>
                                    <td className="whitespace-normal font-medium text-lg text-gray-900 border border-gray-300 p-4">160002008</td>
                                </tr>
                                <tr className="bg-white">
                                    <td className="whitespace-normal font-medium text-lg text-gray-900 border border-gray-300 p-4">Address</td>
                                    <td className="whitespace-normal font-medium text-lg text-gray-900 border border-gray-300 p-4">PEC Market, Sector 12, Chandigarh</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="px-4 lg:px-24 py-4 lg:py-24 flex flex-col items-center">
                        <p className="text-xl pt-5 mt-5 text-center">You can also scan this QR code to register</p>
                        <img src={reg_qr} className="h-48 w-48 lg:h-64 lg:w-64 mt-4" />
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row space-x-0 lg:space-x-3 border-r-black overflow-x-auto">
                    <div className="overflow-x-auto w-full ">
                        <p className="text-xl pt-5 mt-5 w-full lg:w-2/3">Registration fees for  foreign participants (only) will be paid to the below bank details : </p>
                        <table className="w-full mt-8 border border-gray-300 rounded-lg">
                            <thead>
                                <tr>
                                    <th className="font-medium text-lg border border-gray-300 bg-gray-100 p-4 whitespace-normal text-left">Beneficiary Name</th>
                                    <th className="font-medium text-lg border border-gray-300 bg-gray-100 p-4 whitespace-normal text-left">Punjab Engineering College (Registration / Applications A/c)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="bg-white">
                                    <td className="whitespace-normal font-medium text-lg text-gray-900 border border-gray-300 p-4">Bank</td>
                                    <td className="whitespace-normal font-medium text-lg text-gray-900 border border-gray-300 p-4">State Bank of India</td>
                                </tr>
                                <tr className="bg-white">
                                    <td className="whitespace-normal font-medium text-lg text-gray-900 border border-gray-300 p-4">FCRA Account No.</td>
                                    <td className="whitespace-normal font-medium text-lg text-gray-900 border border-gray-300 p-4">40742829548</td>
                                </tr>
                                <tr className="bg-white">
                                    <td className="whitespace-normal font-medium text-lg text-gray-900 border border-gray-300 p-4">Branch Code</td>
                                    <td className="whitespace-normal font-medium text-lg text-gray-900 border border-gray-300 p-4">00691</td>
                                </tr>
                                <tr className="bg-white">
                                    <td className="whitespace-normal font-medium text-lg text-gray-900 border border-gray-300 p-4">IFSC</td>
                                    <td className="whitespace-normal font-medium text-lg text-gray-900 border border-gray-300 p-4">SBIN0000691</td>
                                </tr>
                                <tr className="bg-white">
                                    <td className="whitespace-normal font-medium text-lg text-gray-900 border border-gray-300 p-4">SWIFT</td>
                                    <td className="whitespace-normal font-medium text-lg text-gray-900 border border-gray-300 p-4">SBININBB104</td>
                                </tr>
                                <tr className="bg-white">
                                    <td className="whitespace-normal font-medium text-lg text-gray-900 border border-gray-300 p-4">Address</td>
                                    <td className="whitespace-normal font-medium text-lg text-gray-900 border border-gray-300 p-4">FCRA Cell, 4th Floor, State Bank of India, New Delhi Main Branch11, Sansad Marg, New Delhi -110001</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div>




                <div className="mt-8 text-center">
                    <a href="https://forms.gle/vdvAZifaNYkDavrz6" target="_blank" className="inline-block px-8 py-4 text-white bg-blue-500 border border-transparent rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white">
                        Register
                    </a>
                </div>
            </div>
        </div>
    );
}
