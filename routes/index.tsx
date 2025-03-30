import CocktailComponent from "../components/cocktailComponent.tsx";
import { Drinks, getCocktailAPI } from "../utils/utils.ts";

export default async function Home() {
  const cocktail: Drinks = await getCocktailAPI();
  //console.log(cocktail);

  return <CocktailComponent d={cocktail} />;
}
