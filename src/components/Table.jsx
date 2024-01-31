import TableRow from './TableRow';

const Table = ({ data }) => {

    return (
        <div>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <h1 className='text-black font-nunito font-medium text-2xl mb-3'>Uploads</h1>
                <table className="w-full text-sm text-left rtl:text-right text-[#000000] dark:text-gray-400 ">
                    <thead className="text-title-sm text-[#000000] bg-[#F5F5F5] space-y-2 font-figTree">
                        <tr>
                            <td scope="col" className="px-6 py-3 text-left">
                                Sn.No.
                            </td>
                            <td scope="col" className="px-6 py-3 text-left">
                                Links
                            </td>
                            <td scope="col" className="px-6 py-3 text-left">
                                Prefix
                            </td>
                            <td scope="col" className="px-6 py-3 text-left">
                                Add Tags
                            </td>
                            <td scope="col" className="px-6 py-3 text-left">
                                Selected Tags
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) =>
                            <TableRow key={index} item={item} index={index}/>
                        )}
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default Table