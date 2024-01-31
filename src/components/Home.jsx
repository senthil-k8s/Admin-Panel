import { useEffect, useState } from "react";
import { Excel } from "../assets";
import { getInputData, saveInputData } from "../services/api.service";
import Spinner from "./Spinner";
import { toast } from 'react-toastify';
import Table from "./Table";

const Home = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null)
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const fetchedData = await getInputData();
            setData(fetchedData);
        };
        fetchData();
    }, [])


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
                            <div className="w-full flex flex-col items-center md:p-24 p-4 bg-white text-blue rounded-lg shadow-lg tracking-wide border border-dashed cursor-pointer hover:bg-blue hover:text-white">
                                <img src={Excel} alt="" className="w-8 h-8" />
                                <p className="font-nunito text-gray-400 text-lg">{selectedFile.name + ".xls"}</p>
                                <button onClick={removeFile} className="text-red-500">Remove</button>
                            </div>
                        ) : (
                            <>
                                <label htmlFor="file-upload" className="w-full flex flex-col items-center md:p-24 p-4 bg-white text-blue rounded-lg shadow-lg tracking-wide border border-dashed cursor-pointer hover:bg-blue hover:text-white">
                                    <img src={Excel} alt="" className="w-8 h-8" />
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