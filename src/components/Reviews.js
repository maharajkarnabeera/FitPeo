import { Rating } from "@mui/material";
import Profile from "./Profile";
import StarIcon from "@mui/icons-material/Star";

const reviewsJson = [
    {
      name: "Karna Beera",
      rating: 4,
      review:
        "This is quite a good experience working on this design and implementing these components using various libraries.",
    },
    {
      name: "Alex Johnson",
      rating: 5,
      review:
        "Exceptional experience! The design was intuitive and the component integration was seamless.",
    },
    {
      name: "Jordan Lee",
      rating: 3,
      review:
        "The project was okay. Some components were challenging to integrate, but the end result is satisfactory.",
    },
    {
      name: "Taylor Brown",
      rating: 4,
      review:
        "Overall, a great experience. The libraries used were well-documented, making the implementation easier.",
    },
    {
      name: "Morgan Davis",
      rating: 2,
      review:
        "The process was a bit frustrating. There were some issues with the libraries that made implementation more difficult.",
    },
    {
      name: "Casey Miller",
      rating: 5,
      review:
        "Fantastic experience! The design was elegant, and the components fit perfectly with the libraries used.",
    },
    {
      name: "Riley Wilson",
      rating: 3,
      review:
        "The project met expectations but had some rough edges. The libraries used were somewhat inconsistent.",
    },
    {
      name: "Jamie Taylor",
      rating: 4,
      review:
        "Very good experience. The design was solid, and integration with the libraries was mostly smooth.",
    },
    {
      name: "Sydney Anderson",
      rating: 5,
      review:
        "Excellent experience! Everything worked as expected, and the libraries provided great support for the design.",
    },
    {
      name: "Robin Clark",
      rating: 4,
      review:
        "Good experience overall. The components were well integrated, although there were minor issues with some libraries.",
    },
  ];
  
const Review = ({ name, rating, review }) => {
  return (
    <div className="text-gray-200 py-4 border-b-[1px]" style={{borderColor: '#35383f',}}>
      <div className="flex items-center gap-2 mb-4">
        <Profile />
        <span>{name}</span>
      </div>
      <Rating
        emptyIcon={
          <StarIcon style={{ opacity: 1, color: "#fff" }} fontSize="inherit" />
        }
        name="read-only"
        value={rating}
        readOnly
      />
      <p>{review}</p>
    </div>
  );
};

const Reviews = () => {
  return (
    <div className="bg-[#202028] p-4 rounded-md">
      <h2 className="mb-8 text-gray-300 font-extrabold text-xl">
        Customer's Feedback
      </h2>
      <div className="lg:h-[400px] overflow-y-scroll custom-scrollbar">
      {reviewsJson.map((item, index) => {
        return (
          <Review
            key={index}
            name={item.name}
            rating={item.rating}
            review={item.review}
          />
        );
      })}
      </div>
    </div>
  );
};

export default Reviews;
