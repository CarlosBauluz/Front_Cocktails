export type Drinks = {
  idDrink: string;
  strDrink: string;
}[];

export const getCocktailAPI = async () => {
  const url = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
  const data = await fetch(url);
  const cocktail = await data.json();
  return cocktail.drinks;
};

export const getCocktailAPIbyID = async (id: string) => {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
  const data = await fetch(url);
  const cocktail = await data.json();
  return cocktail.drinks;
};

export const getCocktailAPIbyNAME = async (name: string) => {
  const url =
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`;
  const data = await fetch(url);
  const cocktail = await data.json();
  return cocktail.drinks;
};
