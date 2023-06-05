import { useState } from 'react';
import { ReactSVG } from 'react-svg';
import { RadioGroup } from '@headlessui/react';
import GoogleSheetsLogo from '../../images/google-sheets.svg';
import GmailLogo from '../../images/gmail.svg';
import DocumentLogo from '../../images/document.svg';

const productOptions = [
  { name: 'Invoicing', value: 'invoicing' },
  { name: 'Event RSVP', value: 'event' },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

const ProductSection = () => {
  const [selected, setSelected] = useState('invoicing');

  return (
    <div className="mx-auto max-w-7xl px-6 py-12">
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
                    'cursor-pointer mr-4 inline-flex items-center rounded-md py-2 px-3 text-sm font-medium'
                  )
                }
                disabled={false}
              >
                <RadioGroup.Label className="flex items-center justify-center">
                  {option.name}
                </RadioGroup.Label>
              </RadioGroup.Option>
            ))}
          </div>
        </RadioGroup>
      </div>
      <div className="py-3">
        {selected === 'invoicing' && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="">
              <img
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
                alt=""
                className="w-full rounded-xl bg-gray-900/5 object-contain shadow-lg"
              />
            </div>
            <div className="col-span-2">
              <h5 className="text-xl text-gray-900">
                Streamline Your Business with Seamless Invoice Generation &
                Email Delivery
              </h5>
              <p className="mt-2 text-sm leading-8 text-gray-600 text-gray-500">
                Introducing our innovative business automation tool that
                seamlessly integrates with Google Sheets, revolutionizing the
                way you handle invoice generation and customer communication.
              </p>

              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <ReactSVG src={GoogleSheetsLogo} className="w-20 h-20" />
                  <div>
                    <strong className="font-semibold text-gray-900">
                      Google Sheets Integration:
                    </strong>{' '}
                    Connect your existing Google Sheets to our tool and leverage
                    its powerful capabilities. Easily import and manage your
                    invoice data directly from Google Sheets, ensuring accurate
                    and up-to-date information.
                  </div>
                </li>
                <li className="flex gap-x-3">
                  <ReactSVG src={DocumentLogo} className="w-24 h-24" />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Multiple Invoice PDF Generation:
                    </strong>{' '}
                    Say goodbye to manual invoice generation. With just a click
                    of a button, our tool empowers you to generate multiple
                    professional and beautifully designed invoice PDFs in no
                    time. Save valuable hours and resources that were previously
                    spent on manual invoice creation.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ReactSVG src={GmailLogo} className="w-20 h-20" />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Seamless Email Integration:
                    </strong>{' '}
                    Simplify customer communication by integrating our tool with
                    Gmail. Effortlessly send generated invoices to your
                    customers directly from your Gmail account. This seamless
                    integration eliminates the need for manual email attachments
                    and ensures efficient delivery of invoices to the right
                    recipients.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        )}
        {selected === 'event' && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
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

              <ul role="list" className="mt-8 space-y-8 text-gray-600">
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
                      Multiple Invoice PDF Generation:
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
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductSection;
