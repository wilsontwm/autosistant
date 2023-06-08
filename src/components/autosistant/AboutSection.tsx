interface AboutSectionProps {
  aboutRef: React.RefObject<HTMLDivElement>;
}

const AboutSection: React.FC<AboutSectionProps> = ({ aboutRef }) => {
  return (
    <div className="" ref={aboutRef}>
      <div className="mx-auto max-w-7xl px-6 py-6">
        <div className="xl:mx-auto xl:max-w-7xl">
          <img
            src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2894&q=80"
            alt=""
            className="aspect-[9/4] w-full object-cover rounded-xl xl:rounded-3xl"
          />
        </div>
        <h2 className="flex justify-center items-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl my-8">
          We simplify business process with technology
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-16">
          <div className="">
            <h5 className="text-xl md:text-2xl text-gray-900">Our Mission</h5>
            <p className="text-md text-gray-600 text-justify">
              We strive to empower businesses to thrive in a rapidly evolving
              digital landscape by simplifying their complex processes with
              innovative technology solutions that they are already familiar
              with, ensuring their success and growth.
            </p>
          </div>
          <div className="">
            <h5 className="text-xl md:text-2xl text-gray-900">Our Values</h5>
            <p className="text-md text-gray-600 text-justify">
              We embrace a culture of innovation, constantly seeking new and
              creative ways to simplify and improve business processes through
              technology.
            </p>
          </div>
        </div>
        <div className="flex-none sm:flex sm:space-x-12 py-12">
          <h3 className="text-3xl font-bold">Have questions to ask?</h3>
          <a
            href="mailto:autosistant@gmail.com"
            className="mt-4 sm:mt-0 inline-block rounded-md bg-green-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
