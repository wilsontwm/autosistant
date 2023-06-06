const FooterSection = () => {
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
            <a href="#">Invoicing</a> | <a href="#">Event RSVP</a>
          </p>
          <p className="text-sm font-light">
            <a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
