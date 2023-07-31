import Banner from "./Banner";
import Gallery from "./Gallery";
import SubCategory from "./Category";
import Services from "./Services";
import Apply from "./Apply";
import useTitle from "../../hooks/useTitle";


const Home = () => {
      useTitle('Toy Galaxy | Home'); // use title

      return (
            <div className="my-12 w-11/12 mx-auto">
                  <Banner />
                  <Gallery />
                  <SubCategory />
                  <Services />
                  <Apply />
            </div>
      );
};

export default Home;