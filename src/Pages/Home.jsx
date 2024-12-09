import Navbar from "../components/Navbar/Navbar";
import Header from "../components/Header/Header";
import Card from "../components/card/Card";
const Home = () => {
  return (
    <div className="flex">
      <Navbar />
      <div className="w-full">
        <Header />
        <Card />
      </div>
    </div>
  );
};

export default Home;
