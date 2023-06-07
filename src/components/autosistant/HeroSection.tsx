import Lottie from 'lottie-react';
import businessAutomation from '../../images/lottie/business-automation.json';
import Logo from '../../images/logo.svg';
import { ReactSVG } from 'react-svg';

interface HeroSectionProps {
  scrollToAboutSection: () => void;
  scrollToProductSection: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  scrollToAboutSection,
  scrollToProductSection,
}) => {
  return (
    <div className="bg-white">
      <header className="absolute inset-x-0 top-0 z-50 mx-auto max-w-7xl px-6 py-6 lg:px-8">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Autosistant</span>
            <ReactSVG src={Logo} className="h-10 w-10" alt="Autosistant" />
          </a>
        </div>
      </header>
      <div className="relative isolate overflow-hidden ">
        <div className="relative mx-auto h-full max-w-7xl">
          <svg
            className="absolute right-full translate-y-1/4"
            width={404}
            height={784}
            fill="none"
            viewBox="0 0 404 784"
          >
            <defs>
              <pattern
                id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={784}
              fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
            />
          </svg>
          <svg
            className="absolute left-full -translate-y-3/4 -translate-x-1/4 transform md:-translate-y-1/2 lg:-translate-x-1/2"
            width={404}
            height={784}
            fill="none"
            viewBox="0 0 404 784"
          >
            <defs>
              <pattern
                id="5d0dd344-b041-4d26-bec4-8d33ea57ec9b"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={784}
              fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)"
            />
          </svg>
        </div>
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-24 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 ">
            <div className="">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl sm:py-2 md:py-8">
                Drive <span className="text-green-500">Business Growth</span>{' '}
                with Automation
              </h1>
              <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
                <p className="text-lg leading-8 text-gray-600">
                  Focus on what you do best and we take care of your mundane
                  tasks.
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                  <a
                    onClick={scrollToProductSection}
                    className="cursor-pointer rounded-md bg-green-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Get started
                  </a>
                  <a
                    onClick={scrollToAboutSection}
                    className="cursor-pointer text-sm font-semibold leading-6 text-gray-900"
                  >
                    Learn more <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </div>
            <Lottie
              className="mt-10 aspect-[6/5] w-full max-w-lg rounded-2xl object-cover sm:mt-0 lg:mt-0 lg:max-w-none xl:mt-0"
              animationData={businessAutomation}
              loop={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
