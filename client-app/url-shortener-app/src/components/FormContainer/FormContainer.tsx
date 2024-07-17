import * as React from 'react';
import axios from 'axios';
import { IoSend } from "react-icons/io5";
import { serverURL } from '../../helpers/Constants';

interface IFormContainerProps {
  updateReloadState: () => void;
}

const FormContainer: React.FunctionComponent<IFormContainerProps> = 
(props) => {
    const {updateReloadState} = props;
    const [fullURL, setfullURL] = React.useState<string>("");
    const handleSubmit =async (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            await axios.post(`${serverURL}/shortURL`, {
                fullURL : fullURL
            });
            setfullURL("");
            updateReloadState();
  
            
        } catch (error) {
          console.log(error);
            
        }
    }
  return (
    <div>
      <div className='container bg-orange-50 z-10 mx-auto'>
        <div className='bg-banner font-serif text-center my-3 rounded-md '>
            <h2 className='text-orange-500 text-2xl '>URL shortener</h2>
            <p className='text-xl'>Paste your untidy link to shorten it</p>
            <p >Free tool to shorten a URL or reduce link, Use our URL shortener to create a shortend & neat link making it easy to use</p>
            <form onSubmit={handleSubmit}>
                <div className='flex items-center w-full justify-center'>
                    <div className='relative w-3/4 flex items-center justify-center'>
                        <input type="text" placeholder='Enter your large URL here' required
                        value={fullURL}
                        onChange={(e:React.ChangeEvent<HTMLInputElement>) => setfullURL(e.target.value)}
                         className='w-full text-blue-500 focus:bg-white border rounded-md bg-gray-900 placeholder:text-orange-50 
                        focus:outline-none placeholder:text-center  focus:border-orange-500 p-3 focus:placeholder:text-black focus:border-2' />
                        <button type='submit' className='absolute top-2 p-1 right-3 text-orange-500 '><IoSend size={26} /></button>
                    </div>
                </div>
            </form>

        </div>
      </div>
      
    </div>
  );
};

export default FormContainer;