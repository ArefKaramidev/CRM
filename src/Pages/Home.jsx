import Navbar from "../components/Navbar/Navbar";
import Header from "../components/Header/Header";
import Card from "../components/card/Card";
import { Chart } from "../components/Chart/Chart";
const Home = () => {
  return (
    <div className="flex">
      <Navbar />
      <div className="w-full">
        <Header />
        <Card />
        <Chart />
      </div>
    </div>
  );
};

export default Home;
