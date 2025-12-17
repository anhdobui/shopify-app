import { LoaderFunctionArgs } from "react-router";

export async function loader({ request }: LoaderFunctionArgs) {
    return { 
        ok:true,
        message: "Wishlist API Loader" 
};
}