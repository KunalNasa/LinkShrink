import * as React from 'react';

interface IFooterProps {
  
}

const Footer: React.FunctionComponent<IFooterProps> = () => {
  return (
    <div className='bg-gray-900 sticky bottom-0 w-[100%] flex items-center justify-center py-5 text-orange-600 font-bold'>
            Copyright &#169; Kunal Nasa
    </div>
  );
};

export default Footer;