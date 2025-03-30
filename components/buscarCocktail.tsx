import { FunctionalComponent } from "preact/src/index.d.ts";
import { Drinks } from "../utils/utils.ts";

const BuscarCocktail: FunctionalComponent = () => {
  return (
    <form method="GET" action="/buscar" class="formulario">
      <input type="text" name="name" placeholder="name" required></input>
      <button type="submit">Buscar</button>
    </form>
  );
};

export default BuscarCocktail;
