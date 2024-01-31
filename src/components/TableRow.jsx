import React, { useState } from 'react'

const TableRow = ({ item, index }) => {
    const [selectedTags, setSelectedTags] = useState([]);

    const handleClickTag = (e) => {
        if (!selectedTags.includes(e.target.value)) {
            setSelectedTags([...selectedTags, e.target.value]);
        }
    };

    const handleRemoveTag = (tag) => {
        setSelectedTags(selectedTags.filter((t) => t !== tag));
    };

    return (
        <tr className='odd:bg-white even:bg-white border-2 w-full mt-10 font-figTree'>
            <td scope='row' className='px-6 py-4 text-gray-600  text-left text-sm'>
                {index + 1}
            </td>
            <td scope='row' className='px-6 py-4 text-blue-600 text-underline underline underline-offset-1  whitespace-nowrap text-left text-sm'>
                <a href={item.link} target="_blank" rel="noopener noreferrer" >
                    {item.link}
                </a>
            </td>
            <td scope='row' className=' text-gray-600 text-left text-sm'>
                {item.prefix}
            </td>
            <td className='px-6 py-4 p-8 mt-1 text-gray-600 text-left text-sm gap-8'>
                <select
                    name=""
                    id=""
                    defaultValue="Select Tags"
                    className='border-2 rounded-md p-2 bg-gradient-to-b from-gray-200 to-white text-sm '
                    onChange={(e) => handleClickTag(e)}
                >
                    <option value="" hidden >
                        Select Tags
                    </option>
                    {Object.values(item.selectTags).join(',').split(',').map((item, index) =>
                        <option key={index} value={item} className='p-2'>
                            {item}
                        </option>
                    )}
                </select>
            </td>
            <td className=' text-gray-600 text-left text-sm flex flex-wrap w-[400px]'>
                {selectedTags.map((tag) => (
                    <div
                        key={tag}
                        className="border rounded-lg m-1 p-2 bg-[#605BFF] uppercase text-white text-xs w-auto"
                    >
                        {tag}
                        <span
                            className="ml-2 cursor-pointer text-white font-bold"
                            onClick={() => handleRemoveTag(tag)}
                        >
                            &#10005;
                        </span>
                    </div>
                ))}
            </td>
        </tr>
    );
};

export default TableRow;