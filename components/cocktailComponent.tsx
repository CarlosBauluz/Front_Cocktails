import { FunctionalComponent } from "preact/src/index.d.ts";
import { Drinks } from "../utils/utils.ts";

type Data = {
  d: Drinks;
};

const CocktailComponent: FunctionalComponent<Data> = (
  props,
) => {
  const drinks = props.d;
  //drinks.map((e) => console.log(e));
  return (
    <div>
      {drinks.map((a) => (
        <div>
          <p>El id de tu bebida es {a.idDrink}</p>
          <p>El nombre de tu bebida es {a.strDrink}</p>
        </div>
      ))}
    </div>
  );
};

export default CocktailComponent;
