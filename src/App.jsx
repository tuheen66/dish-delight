import Banner from "./Banner/Banner";
import NavBar from "./NavBar/NavBar";
import RecipesContainer from "./RecipesContainer/RecipesContainer";

function App() {
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

      <div className="flex flex-col lg:flex-row gap-8 justify-between mb-20 mx-4 ">
      <RecipesContainer></RecipesContainer>

      </div>
    </div>
  );
}

export default App;
