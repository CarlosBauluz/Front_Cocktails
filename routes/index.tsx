import { getCocktailAPI } from "../utils/utils.ts";

export default async function Home() {
  const cocktail = await getCocktailAPI();
  //console.log(cocktail);

  return (
    <div>
      <p>{cocktail?.idDrink || "ID not available"}</p>
      <p>{cocktail?.strDrink || "No cocktail name available"}</p>
    </div>
  );
}
