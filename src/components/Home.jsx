import { useEffect, useState } from "react";
import { Excel } from "../assets";
import { getInputData, saveInputData } from "../services/api.service";
import Spinner from "./Spinner";
import { toast } from 'react-toastify';
import Table from "./Table";
import * as XLSX from "xlsx";

const Home = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null)
    const [data, setData] = useState([]);
    useEffect( () => {
        const fetchData = async () => {
            const fetchedData = await getInputData();
            setData(fetchedData);
        };
        fetchData();
    },[])
    

    const onFileChange = (e) => {
        console.log(e);
        setSelectedFile(e.target.files[0]);
    }

    const removeFile = () => {
        setSelectedFile(null);
        document.getElementById("file-upload").value = null;
    }

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            setIsLoading(true);
            // const reader = new FileReader();
            // reader.readAsBinaryString(selectedFile);
            // reader.onload= (e) => {
            //     const data = e.target.result;
            //     const workbook = XLSX.read(data, { type : "binary"});
            //     const sheetName = workbook.SheetNames[0];
            //     const sheet = workbook.Sheets[sheetName];
            //     const parsedData = XLSX.utils.sheet_to_json(sheet);
            //     setData(parsedData);
            // }
            const formData = new FormData();
            formData.append('file', selectedFile);
            const response = await saveInputData(formData);
            console.log(response);
            if (response.success) {
                alert("File uploaded successfully");
                toast("File uploaded successfully");
            }
        } catch (error) {
            console.error('An error occurred:', error);
        } finally {
            setIsLoading(false);
            setSelectedFile(null);
        }
    }

    return (
        <div>
            <div className="h-full ml-14 mt-24 mb-10 md:ml-64 flex flex-col justify-center items-center">
                <>
                    <form
                        className="w-1/2 h-1/2 flex flex-col justify-center items-center p-4"
                        onSubmit={handleSubmit}
                    >
                        {selectedFile ? (
                            <div className="w-full flex flex-col items-center p-24 bg-white text-blue rounded-lg shadow-lg tracking-wide border border-dashed cursor-pointer hover:bg-blue hover:text-white">
                                <img width={"8%"} height={"8%"} src={Excel} alt="" />
                                <p className="font-nunito text-gray-400 text-lg">{selectedFile.name + ".xls"}</p>
                                <button onClick={removeFile} className="text-red-500">Remove</button>
                            </div>
                        ) : (
                            <>
                                <label htmlFor="file-upload" className="w-full flex flex-col items-center p-24 bg-white text-blue rounded-lg shadow-lg tracking-wide border border-dashed cursor-pointer hover:bg-blue hover:text-white">
                                    <img width={"8%"} height={"8%"} src={Excel} alt="" />
                                    <p className="mt-2 font-nunito text-gray-400 text-lg">Drop your excel File or <span className="text-[#605BFF] font-nunito">browse</span></p>
                                    <input type='file' className="hidden" id="file-upload" accept=".xlsx, .xls" onChange={onFileChange} />
                                </label>
                            </>
                        )}

                        <button type="submit" className="w-full mt-4 bg-[#605BFF]  text-white font-bold py-2 px-4 rounded" disabled={!selectedFile}>
                            {isLoading ? <Spinner /> : "Upload"}
                        </button>
                    </form>
                </>
                <div className="w-full">
                {data.length > 0 && (
                    <Table data={data} />
                )}
                </div>
            </div>

        </div>
    )
}

export default Home