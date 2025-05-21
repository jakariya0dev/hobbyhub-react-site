import Newsletter from "../components/home/Newsletter.jsx";
import Reviews from "../components/home/Reviews.jsx";
import Sliders from "../components/home/Sliders.jsx";
import { Helmet } from "react-helmet";

import { useLoaderData } from "react-router";
import GroupCard from "../components/group/GroupCard.jsx";

const Home = () => {
  const groupsData = useLoaderData();
  const upcomigGroups = groupsData.filter((group, index) => {
    if (index < 5) {
      const startDate = new Date(group.startDate);
      const today = new Date();
      return startDate > today;
    }
  });

  return (
    <>
      <Helmet>
        <title>HobbyHub | Discover New Hobbies</title>
        <meta name="description" content="Discover new hobbies" />
      </Helmet>
      <div>
        <Sliders />
        <section>
          <h2 className="text-2xl font-bold text-center mb-6">
            Discover New Hobbies
          </h2>
          <div className="max-w-7xl mx-auto pt-10 p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {upcomigGroups.map((group) => (
              <GroupCard key={group._id} group={group} />
            ))}
          </div>
        </section>
        <Reviews />
        <Newsletter />
      </div>
    </>
  );
};

export default Home;
