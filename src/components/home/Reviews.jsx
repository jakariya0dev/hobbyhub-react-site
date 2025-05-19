import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaStar } from "react-icons/fa";

const reviews = [
    {
        name: "Emma Watson",
        role: "Book Club Member",
        comment: "HobbyHub helped me find the perfect book club in my area. I've met amazing people and enjoyed some great reads.",
        avatar: "https://randomuser.me/api/portraits/women/1.jpg",
        rating: 5,
    },
    {
        name: "Liam Smith",
        role: "Hiking Enthusiast",
        comment: "This platform connected me with a local hiking group that meets every weekend. Love it!",
        avatar: "https://randomuser.me/api/portraits/men/2.jpg",
        rating: 4,
    },
    {
        name: "Sophia Lee",
        role: "Painting Instructor",
        comment: "I started a painting circle through HobbyHub and now host weekly workshops. Super easy to use.",
        avatar: "https://randomuser.me/api/portraits/women/3.jpg",
        rating: 5,
    },
    {
        name: "Noah Johnson",
        role: "Guitar Player",
        comment: "Met a few friends who love jamming on weekends. HobbyHub rocks!",
        avatar: "https://randomuser.me/api/portraits/men/4.jpg",
        rating: 4,
    },
    {
        name: "Ava Williams",
        role: "Cooking Hobbyist",
        comment: "Joined a cooking club near me. Learned new recipes and made new friends!",
        avatar: "https://randomuser.me/api/portraits/women/5.jpg",
        rating: 5,
    },
];

const ReviewCarousel = () => {
    const settings = {
        dots: true,
        arrows: true,
        infinite: true,
        speed: 600,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        responsive: [
            {
                breakpoint: 1024,
                settings: { slidesToShow: 2 },
            },
            {
                breakpoint: 640,
                settings: { slidesToShow: 1 },
            },
        ],
    };

    return (
        <div className="max-w-7xl mx-auto px-4 my-12">
            <h2 className="text-2xl font-bold text-center mb-8">What Our Members Say</h2>
            <Slider {...settings}>
                {reviews.map((review, index) => (
                    <div key={index} className="px-3">
                        <div className="bg-white p-6 rounded-xl shadow-md h-full flex flex-col items-center text-center">
                            <img
                                src={review.avatar}
                                alt={review.name}
                                className="w-20 h-20 rounded-full object-cover mb-4"
                            />
                            <h3 className="text-lg font-semibold">{review.name}</h3>
                            <p className="text-sm text-gray-500">{review.role}</p>
                            <div className="flex justify-center text-yellow-400 mt-2 mb-3">
                                {Array(review.rating)
                                    .fill()
                                    .map((_, i) => (
                                        <FaStar key={i} />
                                    ))}
                            </div>
                            <p className="text-gray-600 text-sm leading-relaxed">"{review.comment}"</p>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default ReviewCarousel;
