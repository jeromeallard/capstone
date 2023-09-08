import Hero from "../components/Hero";
import Special from "../components/Specials";
import greeksalad from "../images/specials/greekSalad.jpg";
import bruschetta from "../images/specials/bruschetta.jpg";
import dessert from "../images/specials/lemoncustard.jpg";
import Testimonials from "../components/Testimonials";

const data = [
  {
    name: "Greek Salad",
    price: "$8.99",
    image: greeksalad,
    description: "Lettuce, peppers, olives and feta cheese, garnished with garlic and croutons.",
  },
  {
    name: "Bruschetta",
    price: "$6.99",
    image: bruschetta,
    description: "Grilled bread smeared with garlic and seasoned with salt and olive oil.",
  },
  {
    name: "Lemon Special Custard",
    price: "$4.99",
    image: dessert,
    description: "This comes straight from grandma's recipe book.",
  },
];

const Home = () => {
  return (
    <>
      <Hero />
      <Special data={data} />
      <Testimonials />
    </>
  );
};

export default Home;
