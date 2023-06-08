import { Link } from 'react-router-dom';

interface FooterSectionProps {
  scrollToAboutSection: () => void;
  scrollToProductSection: () => void;
}

const FooterSection: React.FC<FooterSectionProps> = ({
  scrollToAboutSection,
  scrollToProductSection,
}) => {
  return (
    <div className="bg-gray-700">
      <div className="mx-auto max-w-7xl px-6 py-6 text-gray-100 grid xs:grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="">
          <h3 className="text-xl mb-3">Autosistant</h3>
          <p className="text-sm">
            © {new Date().getFullYear()} Autosistant. All rights reserved.{' '}
          </p>
        </div>

        <div className="col-span-2">
          <p className="text-sm font-light">
            <a className="cursor-pointer" onClick={scrollToProductSection}>
              Invoicing
            </a>{' '}
            | More to come soon...
          </p>
          <p className="text-sm font-light">
            <Link to="/privacy">Privacy Policy</Link> |{' '}
            <Link to="/terms">Terms of Use</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
