import { FaStar } from "react-icons/fa";

export default function ReviewItem({ review }) {
  return (
    <div className="px-3 my-4">
      <div className="border border-base-content/10 bg-base-300 p-6 rounded-xl shadow-xl h-full flex flex-col items-center text-center">
        <img
          src={review.avatar}
          alt={review.name}
          className="w-20 h-20 rounded-full object-cover mb-4"
        />
        <h3 className="text-lg font-semibold">{review.name}</h3>
        <p className="text-sm">{review.role}</p>
        <div className="flex justify-center text-yellow-400 mt-2 mb-3">
          {Array(review.rating)
            .fill()
            .map((_, i) => (
              <FaStar key={i} />
            ))}
        </div>
        <p className="text-sm leading-relaxed">"{review.comment}"</p>
      </div>
    </div>
  );
}
