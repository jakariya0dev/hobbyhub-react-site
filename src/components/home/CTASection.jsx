import { Link } from "react-router";

const CTASection = () => {
  return (
    <div className="bg-base-300 py-16 px-4 md:px-8 lg:px-24 text-center mt-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 ">
        Ready to Connect with Like-Minded People?
      </h2>
      <p className="text-sm mb-8">
        Start your own hobby group or find one that fits your passion. HobbyHub
        makes it easy!
      </p>

      <div className="flex flex-col md:flex-row justify-center gap-6">
        <Link
          to="/group/create"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Create a Group
        </Link>

        <Link
          to="/groups"
          className="border border-blue-600  px-6 py-3 rounded-lg font-semibold hover:bg-blue-100 transition"
        >
          Explore Groups
        </Link>
      </div>
    </div>
  );
};

export default CTASection;
