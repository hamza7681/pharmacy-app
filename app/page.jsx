import Nav from "@/components/Header/Nav";
import HeaderCarousel from "@/components/welcome/HeaderCarousel";
import ProductSearch from "@/components/welcome/ProductSearch";

const Home = () => {
  return (
    <>
      <Nav />
      <HeaderCarousel />
      <ProductSearch />
      <h1>Hello Medical</h1>
    </>
  );
};

export default Home;
