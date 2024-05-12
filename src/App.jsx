import { useState } from "react";
import Banner from "./Banner/Banner";
import CookingContainer from "./Cooking/CookingContainer";
import NavBar from "./NavBar/NavBar";
import RecipesContainer from "./RecipesContainer/RecipesContainer";
import { ToastContainer, toast } from "react-toast";

function App() {
  const [wantToCook, setWantToCook] = useState([]);

  const [currentlyCookings, setCurrentlyCookings] = useState([]);

  const handleWantToToCook = ({ recipe }) => {
    const ifExists = wantToCook.find((item) => item.id == recipe.id);
    if (!ifExists) {
      const newRecipe = [...wantToCook, recipe];
      setWantToCook(newRecipe);
    } else {
      const warn = () =>
        toast.warn("You already added this to your want to cook list!");
      warn();
    }
  };

  const handlePreparing = (id) => {
    const nowCooking = wantToCook.filter((item) => item.id === id);

    const newCurrentlyCooking = [...currentlyCookings, nowCooking];
    setCurrentlyCookings(newCurrentlyCooking);

    const remaining = wantToCook.filter((item) => item.id !== id);
    setWantToCook(remaining);
  };

  return (
    <div className="container mx-auto">
      <NavBar></NavBar>
      <Banner></Banner>

      <div className="text-center mb-8">
        <h3 className="text-4xl font-bold mb-4">Our Recipes</h3>
        <p className="lg:w-2/3 mx-auto">
          Discover culinary delights on our website! Our recipes are crafted
          with passion, blending flavors and techniques to create memorable
          dining experiences. Dive in and elevate your cooking journey today.
        </p>
      </div>

      <ToastContainer position={"top-right"} delay={3000} />

      <div className="flex flex-col lg:flex-row gap-8 justify-between mb-20 mx-4 ">
        <RecipesContainer
          handleWantToToCook={handleWantToToCook}
        ></RecipesContainer>

        <CookingContainer
          wantToCook={wantToCook}
          handlePreparing={handlePreparing}
          currentlyCookings={currentlyCookings}
        ></CookingContainer>
      </div>
    </div>
  );
}

export default App;
