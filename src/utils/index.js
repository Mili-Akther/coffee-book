import toast from "react-hot-toast";

// get all coffees from local storage 
const getAllFavorites = () => {
    const All = localStorage.getItem("favorites");
    
    if (All){
        const favorites = JSON.parse(All);
        console.log(favorites);
        return favorites
    }else {
        console.log([]);
        return []
    }
}
// add a coffee to local storage
const addFavorite = coffee => {
    // get previously saved coffee data 
    const favorites = getAllFavorites()
    const isExist = favorites.find(item=>item.id==coffee.id)
    if (isExist) return toast.error("coffee already exist");

    favorites.push(coffee)
    localStorage.setItem('favorites', JSON.stringify(favorites))
    toast.success("Successfully Added!");
}

// remove coffee form local storage 

const removeFavorite = id => {
  // get previously saved coffee data
  const favorites = getAllFavorites()
  const remaining = favorites.filter(coffee => coffee.id != id)
  localStorage.setItem("favorites", JSON.stringify(remaining));
    toast.success("Successfully Removed!");

}

export { addFavorite, getAllFavorites, removeFavorite };