import * as React from "react";

interface IHeaderProps {
  // Define any props for the Header component here
}

const Header: React.FunctionComponent<IHeaderProps> = () => {
  return (
    <div className="bg-gray-900 text-4xl font-serif sticky top-0 z-10 w-[100%]">
        <div className="container p-2 flex items-center justify-center mx-auto">
            <nav className="py-2 text-orange-600 font-bold">
                <div>LinkShrink</div>

            </nav>
        </div>
    </div>
  );
};

export default Header;
