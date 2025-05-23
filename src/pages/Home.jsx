import { Helmet } from "react-helmet";
import Newsletter from "../components/home/Newsletter.jsx";
import Reviews from "../components/home/Reviews.jsx";
import Sliders from "../components/home/Sliders.jsx";
import UpcomingGroups from "../components/home/UpcomingGroups.jsx";


const Home = () => {
  return (
    <>
      <Helmet>
        <title>HobbyHub | Discover New Hobbies</title>
        <meta name="description" content="Discover new hobbies" />
      </Helmet>
      <div>
        <Sliders />
        <UpcomingGroups />
        <Reviews />
        <Newsletter />
      </div>
    </>
  );
};

export default Home;
