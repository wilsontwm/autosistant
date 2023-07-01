import { useState, useEffect, useRef } from 'react';
import { ReactSVG } from 'react-svg';
import { RadioGroup } from '@headlessui/react';
import GoogleSheetsLogo from '../../images/google-sheets.svg';
import GmailLogo from '../../images/gmail.svg';
import DocumentLogo from '../../images/document.svg';

const productOptions = [{ name: 'Bookkeeping', value: 0 }];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

interface ProductSectionProps {
  productRef: React.RefObject<HTMLDivElement>;
}

const ProductSection: React.FC<ProductSectionProps> = ({ productRef }) => {
  const [selected, setSelected] = useState(0);

  const timerRef = useRef(0);

  const handleTabMouseEnter = () => {
    clearInterval(timerRef.current);
  };

  const handleTabMouseLeave = () => {
    startTabSwitching();
  };

  const startTabSwitching = () => {
    timerRef.current = window.setInterval(() => {
      setSelected((prevTab) => (prevTab + 1) % productOptions.length);
    }, 3000);
  };

  useEffect(() => {
    startTabSwitching();

    return () => {
      clearInterval(timerRef.current);
    };
  }, [productOptions.length]);

  return (
    <div className="mx-auto max-w-7xl px-6 py-12" ref={productRef}>
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        Seamless Workflow for Your Business
      </h2>
      <p className="mt-2 text-lg leading-8 text-gray-600 text-gray-500">
        Check out these tools to help automate your business process to save
        time and money.
      </p>
      <div className="py-3">
        <RadioGroup value={selected} onChange={setSelected} className="flex">
          <div className="">
            {productOptions.map((option) => (
              <RadioGroup.Option
                key={option.name}
                value={option.value}
                className={({ active, checked }) =>
                  classNames(
                    checked
                      ? 'bg-green-100 text-green-900'
                      : 'text-gray-900 hover:bg-green-50 hover:text-green-900',
                    'mr-4 inline-flex items-center rounded-md py-2 px-3 text-sm font-medium'
                  )
                }
                disabled={false}
              >
                <RadioGroup.Label className="cursor-pointer flex items-center justify-center">
                  {option.name}
                </RadioGroup.Label>
              </RadioGroup.Option>
            ))}
          </div>
        </RadioGroup>
      </div>
      <div className="py-3">
        {selected === 0 && (
          <div
            className="grid grid-cols-1 sm:grid-cols-3 gap-4"
            onMouseEnter={handleTabMouseEnter}
            onMouseLeave={handleTabMouseLeave}
          >
            <div className="">
              <img
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
                alt=""
                className="w-full rounded-xl bg-gray-900/5 object-contain shadow-lg"
              />
            </div>
            <div className="col-span-2">
              <h5 className="text-xl text-gray-900">
                Streamline Your Business with Seamless Document Generation &
                Email Delivery
              </h5>
              <p className="mt-2 text-sm leading-8 text-gray-600 text-gray-500">
                Introducing our innovative business automation tool that
                seamlessly integrates with Google Sheets, revolutionizing the
                way you handle document generation and customer communication.
              </p>

              <ul role="list" className="my-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <ReactSVG src={GoogleSheetsLogo} className="w-20 h-20" />
                  <div>
                    <strong className="font-semibold text-gray-900">
                      Google Sheets Integration:
                    </strong>{' '}
                    Connect your existing Google Sheets to our tool and leverage
                    its powerful capabilities. Easily manage your document data
                    directly from Google Sheets, ensuring accurate and
                    up-to-date information.
                  </div>
                </li>
                <li className="flex gap-x-3">
                  <ReactSVG src={DocumentLogo} className="w-24 h-24" />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Multiple Document PDF Generation:
                    </strong>{' '}
                    Say goodbye to manual document generation. With just a click
                    of a button, our tool empowers you to generate multiple
                    professional and beautifully designed document PDFs in no
                    time.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ReactSVG src={GmailLogo} className="w-20 h-20" />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Seamless Email Integration:
                    </strong>{' '}
                    Simplify customer communication by integrating our tool with
                    Gmail. Effortlessly send generated documents to your
                    customers directly from your Gmail account.
                  </span>
                </li>
              </ul>

              <a
                href="https://www.etsy.com/shop/Autosistant?section_id=43682636"
                className="rounded-md bg-green-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
              >
                Explore Now
              </a>
            </div>
          </div>
        )}
        {selected === 1 && (
          <div
            className="grid grid-cols-1 sm:grid-cols-3 gap-4"
            onMouseEnter={handleTabMouseEnter}
            onMouseLeave={handleTabMouseLeave}
          >
            <div className="">
              <img
                src="https://spotlight.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-3.454151b1.jpg&w=384&q=75"
                alt=""
                className="w-full rounded-xl bg-gray-900/5 object-contain shadow-lg"
              />
            </div>
            <div className="col-span-2">
              <h5 className="text-xl text-gray-900">
                Neque porro quisquam est qui dolorem ipsum quia dolor sit amet
              </h5>
              <p className="mt-2 text-sm leading-8 text-gray-600 text-gray-500">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo
              </p>

              <ul role="list" className="my-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <ReactSVG src={GoogleSheetsLogo} className="w-20 h-20" />
                  <div>
                    <strong className="font-semibold text-gray-900">
                      Google Sheets Integration:
                    </strong>{' '}
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis praesentium voluptatum deleniti atque
                    corrupti quos dolores et quas molestias excepturi sint
                    occaecati cupiditate non provident.
                  </div>
                </li>
                <li className="flex gap-x-3">
                  <ReactSVG src={DocumentLogo} className="w-24 h-24" />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Multiple Document PDF Generation:
                    </strong>{' '}
                    Nam libero tempore, cum soluta nobis est eligendi optio
                    cumque nihil impedit quo minus id quod maxime placeat facere
                    possimus. Nam libero tempore, cum soluta nobis est eligendi
                    optio cumque nihil impedit quo minus id quod maxime placeat
                    facere possimus.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ReactSVG src={GmailLogo} className="w-20 h-20" />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Seamless Email Integration:
                    </strong>{' '}
                    Temporibus autem quibusdam et aut officiis debitis aut rerum
                    necessitatibus saepe eveniet ut et voluptates repudiandae
                    sint et molestiae non recusandae. Temporibus autem quibusdam
                    et aut officiis debitis aut rerum necessitatibus saepe
                    eveniet ut
                  </span>
                </li>
              </ul>

              <a
                href="#"
                className="cursor-not-allowed rounded-md bg-gray-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
                aria-disabled="true"
              >
                Coming Soon
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductSection;
