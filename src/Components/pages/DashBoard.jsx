import { useEffect, useState } from "react";
import Heading from "../Heading";
import { getAllFavorites, removeFavorite } from "../../utils";
import Card from "../Card";

const DashBoard = () => {
    const [coffees, setCoffees]= useState([])
    useEffect (()=>{
        const favorites = getAllFavorites()
        setCoffees(favorites)
    },[])
    const handleRemove = id => {
         removeFavorite(id)
          const favorites = getAllFavorites();
          setCoffees(favorites);
    }
    return (
      <>
        <Heading
          title="WelCome To Dashboard"
          subtitle="Manage coffee that you have previously added as favorite.You can view or remove them from here"
        ></Heading>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-12">
          {coffees.map((coffee) => (
            <Card
              handleRemove={handleRemove}
              key={coffee.id}
              coffee={coffee}
            ></Card>
          ))}
        </div>
      </>
    );
};

export default DashBoard;