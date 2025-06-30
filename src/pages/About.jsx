import { Helmet } from "react-helmet";

const About = () => {
  return (
    <>
      <Helmet>
        <title>HobbyHub | About Us</title>
        <meta
          name="description"
          content="Learn more about HobbyHub and how we connect people through hobbies."
        />
      </Helmet>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-6">About HobbyHub</h1>

        <p className="text-lg text-gray-700 mb-6 text-center">
          HobbyHub is your local gateway to discovering and joining hobby groups
          in your area. Whether you're into photography, painting, coding,
          cycling, or reading — there's a community here waiting for you.
        </p>

        <div className="space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-2">🌟 What We Do</h2>
            <p className="text-gray-700">
              HobbyHub makes it easy for anyone to create a local group around a
              shared interest. Others can discover these groups, join them, and
              start collaborating or hanging out — both online and in real life.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">🤝 Who It's For</h2>
            <p className="text-gray-700">
              HobbyHub is for everyone — from casual hobbyists to passionate
              community organizers. If you want to learn, share, or simply
              connect with like-minded people near you, HobbyHub is your perfect
              starting point.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">🚀 Why We Built It</h2>
            <p className="text-gray-700">
              In a digital world, local connections still matter. We built
              HobbyHub to bring people together in meaningful ways — through
              shared passions, skills, and real-life meetups.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">
              🔒 Safe & Supportive
            </h2>
            <p className="text-gray-700">
              We are committed to building a safe, inclusive space for everyone.
              We believe hobbies are not just pastimes — they’re a path to
              connection, creativity, and personal growth.
            </p>
          </section>
        </div>
      </div>
    </>
  );
};

export default About;
