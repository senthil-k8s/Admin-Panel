import React from 'react'

const Table = ({ data }) => {
    
    const handleClick = (e) => {
        console.log(e.target.value);        
    }

    return (

        
        <div>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <h1 className='text-black font-nunito font-medium text-2xl mb-3'>Uploads</h1>
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 space-y-2">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Sn.No.
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Links
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Prefix
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Add Tags
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Selected Tags
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) =>

                            <>
                                <tr className='odd:bg-white even:bg-white border-2 '>
                                    <th scope='row' className='px-6 py-4 text-gray-600  text-center text-sm'>
                                        {index + 1}
                                    </th>
                                    <th scope='row' className='px-6 py-4 text-blue-600 text-underline underline underline-offset-1  whitespace-nowrap text-center text-sm'>
                                        <a href={item.link} target="_blank" rel="noopener noreferrer" >
                                            {item.link}
                                        </a>
                                    </th>
                                    <th scope='row' className='px-6 py-4 text-gray-600 text-center text-sm'>
                                        {item.prefix}
                                    </th>
                                    <td className='px-6 py-4 text-gray-600 text-center text-sm '>
                                        <select name="" id="" className='border-2 rounded-md p-1' onClick={(e) => handleClick(e)}>
                                            {Object.values(data[0].selectTags).join(',').split(',').map((item) =>
                                                <option key={index} value={item} >
                                                    {item}
                                                </option>
                                            )}
                                        </select>
                                    </td>

                                    <td className='px-6 py-4 text-gray-600 text-center text-sm'>{item.selectedTags}</td>
                                </tr>
                            </>
                        )}
                    </tbody>
                    {/* <tbody>
                        <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Apple MacBook Pro 17"
                            </th>
                            <td className="px-6 py-4">
                                Silver
                            </td>
                            <td className="px-6 py-4">
                                Laptop
                            </td>
                            <td className="px-6 py-4">
                                $2999
                            </td>
                            <td className="px-6 py-4">
                                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                            </td>
                        </tr>
                        <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Microsoft Surface Pro
                            </th>
                            <td className="px-6 py-4">
                                White
                            </td>
                            <td className="px-6 py-4">
                                Laptop PC
                            </td>
                            <td className="px-6 py-4">
                                $1999
                            </td>
                            <td className="px-6 py-4">
                                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                            </td>
                        </tr>
                        <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Magic Mouse 2
                            </th>
                            <td className="px-6 py-4">
                                Black
                            </td>
                            <td className="px-6 py-4">
                                Accessories
                            </td>
                            <td className="px-6 py-4">
                                $99
                            </td>
                            <td className="px-6 py-4">
                                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                            </td>
                        </tr>
                        <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Google Pixel Phone
                            </th>
                            <td className="px-6 py-4">
                                Gray
                            </td>
                            <td className="px-6 py-4">
                                Phone
                            </td>
                            <td className="px-6 py-4">
                                $799
                            </td>
                            <td className="px-6 py-4">
                                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Apple Watch 5
                            </th>
                            <td className="px-6 py-4">
                                Red
                            </td>
                            <td className="px-6 py-4">
                                Wearables
                            </td>
                            <td className="px-6 py-4">
                                $999
                            </td>
                            <td className="px-6 py-4">
                                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                            </td>
                        </tr>
                    </tbody> */}
                </table>
            </div>

        </div>
    )
}

export default Table