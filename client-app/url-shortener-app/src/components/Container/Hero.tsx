import * as React from 'react';
import FormContainer from '../FormContainer/FormContainer';
import axios from 'axios';
import DataTable from '../DataTable/DataTable';
import { URLdata } from '../../interface/URLdata';
import { FaGithub } from "react-icons/fa";
import { serverURL } from '../../helpers/Constants';
interface IHeroProps {
  
}

const Hero: React.FunctionComponent<IHeroProps> = () => {
  const [data, setdata] = React.useState<URLdata[]>([]);
  const [reload, setreload] = React.useState<boolean>(false);
  const updateReloadState = ():void => {
    setreload(!reload);
  }

  const fetchTableData = async () => {
    const response = await axios.get(`${serverURL}/shortURL`);
    console.log("The response of the server is : ", response);
    setdata(response.data);
    console.log(data);
  };
  React.useEffect(() => {
    fetchTableData();
  }, [reload])
  return (
  <>
  <div className='bg-orange-50 relative h-auto min-h-[82vh] w-[100vw]'>
      <FormContainer updateReloadState = {updateReloadState}/>
      <DataTable updateReloadState = {updateReloadState} data = {data}/>
      <button className='sticky bg-black text-white px-1 py-1 rounded-full' style={{ position: 'fixed', bottom: '5rem', right: '1rem' }}><a href="https://github.com/KunalNasa/Web-Dev/tree/main/01FullStack" target='blank'><FaGithub size={50}/></a></button>
      </div>
  
  </>
  );

};

export default Hero;