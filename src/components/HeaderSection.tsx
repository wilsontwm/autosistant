import Lottie from 'lottie-react';
import Logo from '../images/logo.svg';
import { ReactSVG } from 'react-svg';

const HeaderSection = () => {
  return (
    <div className="bg-white">
      <header className="absolute inset-x-0 top-0 z-50 mx-auto max-w-7xl px-6 py-6 lg:px-8">
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Autosistant</span>
            <ReactSVG src={Logo} className="h-10 w-10" alt="Autosistant" />
          </a>
        </div>
      </header>
    </div>
  );
};

export default HeaderSection;
