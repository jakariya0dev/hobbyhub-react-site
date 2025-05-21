import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Slide1 from "../../assets/slides/slide-1.jpg";
import Slide2 from "../../assets/slides/slide-2.jpg";
import Slide3 from "../../assets/slides/slide-3.jpg";

const Sliders = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // 1 at a time for focus, can change to 2-3 for wider screens
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const slides = [
    {
      title: "Join a Book Club",
      description:
        "Connect with fellow readers and dive into new worlds together.",
      image: Slide1,
    },
    {
      title: "Explore Nature Trails",
      description: "Find local hiking groups and explore the great outdoors.",
      image: Slide2,
    },
    {
      title: "Unleash Your Creativity",
      description: "Join painting circles and express your inner artist.",
      image: Slide3,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 mt-10 mb-16 md:mb-24">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="px-2">
            <div className="rounded-xl overflow-hidden shadow-md">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-4 bg-base-300">
                <h3 className="text-2xl font-semibold mb-2">{slide.title}</h3>
                <p className="">{slide.description}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Sliders;
