import { FunctionalComponent } from "preact/src/index.d.ts";
import { Drinks } from "../utils/utils.ts";

type Data = {
  d: Drinks;
};

const CocktailComponent: FunctionalComponent<Data> = (
  props,
) => {
  const drinks = props.d;
  console.log(drinks);
  return (
    <div>
      {drinks.map((a) => {
        <div>
          <p>{a.idDrink}</p>
          <p>{a.strDrink}</p>
        </div>;
      })}
    </div>
  );
};

export default CocktailComponent;
