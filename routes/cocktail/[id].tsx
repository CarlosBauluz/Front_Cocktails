import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import { Drinks, getCocktailAPIbyID } from "../../utils/utils.ts";
import CocktailComponent from "../../components/cocktailComponent.tsx";

export const handler: Handlers = {
  GET: async (_req: Request, ctx: FreshContext<unknown, Drinks>) => {
    const { id } = ctx.params;
    const cockta: Drinks = await getCocktailAPIbyID(id);
    return ctx.render(cockta);
  },
};

const Page = (props: PageProps<Drinks>) => {
  return (
    <div>
      {props.data === null
        ? <p>No existe una bebida con este ID</p>
        : <CocktailComponent d={props.data} />}
    </div>
  );
};

export default Page;
