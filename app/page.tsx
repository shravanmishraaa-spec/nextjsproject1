
import RecipeCard from "./components/RecipeCard";
import { recipes } from "./data/recipes";

export default function Home() {
  return (
    <main>
      <section className="hero">
        <h1>Find your next bite.</h1>
        <p>Discover delicious recipes for every mood.</p>
      </section>

      <div className="grid">
        {recipes.map((recipe) => (
          <RecipeCard
            key={recipe.id}
            recipe={recipe}
          />
        ))}
      </div>
    </main>
  );
}
