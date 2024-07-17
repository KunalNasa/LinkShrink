import * as React from 'react';
import { URLdata } from '../../interface/URLdata';
import axios from 'axios';
import { MdDelete } from "react-icons/md";
import { IoCopy } from "react-icons/io5";
import { Link } from 'react-router-dom';
import NoUrlFound from '../FormContainer/NoUrlFound';
// import { ToastContainer, toast } from 'react-toastify';
import { serverURL } from '../../helpers/Constants';
import { table } from 'console';
interface IDataTableProps {
    data: URLdata[];
    updateReloadState: () => void;

}

const DataTable: React.FunctionComponent<IDataTableProps> = (props) => {
    
    const { data,updateReloadState } = props;
    const handleCopy = async (url: string) => {
        try {
            await navigator.clipboard.writeText(`${serverURL}/shortURL/${url}`);
            alert("URL copied to clipboard")
            
        } catch (error) {
            console.log(error);
        }

    }
    const handleDelete = async (id:string) => {
        const response = await axios.delete(`${serverURL}/shortURL/${id}`);
        updateReloadState();
        console.log(response);
    }
    console.log(data);
    const renderTableData = () => {
        return data.map((item) => {
            return (
                <tr key={item._id}>
                    <td className='break-words text-center'>
                        <Link to={item.fullURL} target='blank' rel='noreferrer noopener'>
                            {item.fullURL}
                        </Link>
                    </td>
                    <td className='break-words text-center'>
                        <Link to={`${serverURL}/shortURL/${item.shortURL}`} target='blank' rel='noreferrer noopener'>
                            {item.shortURL}
                        </Link>
                    </td>
                    <td className='break-words text-center'>{item.clicks}</td>
                    <td className='break-words text-center'>
                        <button onClick={() => handleCopy(item.shortURL)} className='p-1 mx-1'><IoCopy size={20} /></button>
                        <button onClick={() => handleDelete(item._id)} className='p-1 mx-1 '><MdDelete size={22} /></button>
                    </td>

                </tr>
            )
        })
    }
    return (
        <div>
            <div className="container mx-auto flex items-center justify-center">
                <div className="realtive m-2 max-h-[62vh] w-3/4 overflow-x-auto shadow">
                    {data.length == 0 ? <div className='w-full h-full shadow-none flex items-center justify-center'>
                        <img src="./OOPS! No URL found.png" alt="" />
                    </div> : <table className=' text-orange-50 w-full table-fixed shadow-md border rounded-md bg-gray-900'>
                        <thead>
                            <tr>
                                <th scope='col' className='px-3 py-1 w-3/12 sm:w-6/12 text-center'>Full URL</th>
                                <th scope='col' className='px-3 py-1 w-3/12 text-center'>Short URL</th>
                                <th scope='col' className='px-3 py-1 text-center'>Clicks</th>
                                <th scope='col' className='px-3 py-1 text-center'>Actions</th>
                            </tr>
                        </thead>
                        <tbody>{renderTableData()}</tbody>
                    </table> }
                    
                </div>
            </div>

        </div>
    );
};

export default DataTable;