import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import BuscarCocktail from "../components/buscarCocktail.tsx";
import CocktailComponent from "../components/cocktailComponent.tsx";
import { Drinks, getCocktailAPIbyNAME } from "../utils/utils.ts";

export const handler: Handlers = {
  GET: async (req: Request, ctx: FreshContext<unknown, Drinks>) => {
    const urlcambiada = new URL(req.url);
    const name = urlcambiada.searchParams.get("name");
    if (name) {
      const bebida: Drinks = await getCocktailAPIbyNAME(name);
      return ctx.render(bebida);
    }
    return ctx.render();
  },
};

const Page = (props: PageProps<Drinks>) => {
  return (
    <div>
      <BuscarCocktail />
      {props.data === undefined
        ? null
        : props.data === null
        ? <p>No se ha encontrado la bebida con este nombre</p>
        : <CocktailComponent d={props.data} />}
    </div>
  );
};

export default Page;
