import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "../Banner";
import Heading from "../Heading";
import Categories from "../Categories";

const Home = () => {
    const categories = useLoaderData()
    console.log(categories);
    return (
      <div>
        {/* Banner */}
        <Banner></Banner>
        {/* Heading*/}
        <Heading
          title={"Browse Coffee By category"}
          subtitle={
            "Choose your desired coffee category to browse through specific coffee that fit in your taste."
          }
        ></Heading>
        {/* categories tag section */}
        <Categories categories={categories}></Categories>
        {/* Dynamic nested component */}
        <Outlet></Outlet>
      </div>
    );
};

export default Home;