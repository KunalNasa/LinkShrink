import * as React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Container/Hero';
import { ToastContainer } from 'react-toastify';
interface IAppProps {
  
}

const App: React.FunctionComponent<IAppProps> = () => {
  return (
    
    <>
     <Header/>
     <Hero/>
     <Footer/>
    </>
  );
};

export default App;