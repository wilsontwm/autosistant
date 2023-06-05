import { ReactSVG } from 'react-svg';
import Heart from '../../images/heart.svg';
import GoogleLogo from '../../images/google.svg';
import GoogleSheetsLogo from '../../images/google-sheets.svg';
import GoogleDocsLogo from '../../images/google-docs.svg';
import GoogleDriveLogo from '../../images/google-drive.svg';

const ToolSection = () => {
  return (
    <div className="bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 py-6">
        <h2 className="flex justify-center items-center text-xl text-gray-600 md:text-2xl sm:py-2 md:py-4">
          Tools & Technologies We{' '}
          <span className="mx-1">
            <ReactSVG src={Heart} className="w-5 h-5" />
          </span>
        </h2>
        <div className="mx-auto max-w-3xl px-6 py-6 grid grid-cols-4 gap-4">
          <div className="flex justify-center items-center">
            <ReactSVG src={GoogleLogo} className="w-12 h-12" />
          </div>
          <div className="flex justify-center items-center">
            <ReactSVG src={GoogleSheetsLogo} className="w-12 h-12" />
          </div>
          <div className="flex justify-center items-center">
            <ReactSVG src={GoogleDocsLogo} className="w-12 h-12" />
          </div>
          <div className="flex justify-center items-center">
            <ReactSVG src={GoogleDriveLogo} className="w-12 h-12" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolSection;
