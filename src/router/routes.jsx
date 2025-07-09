import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import Contactpage from "../pages/Contactpage";
import FavouriteRecipies from "../pages/FavouriteRecipies";
import DetailedRecipie from "../pages/DetailedRecipie";

const routes = createBrowserRouter([{
    path: "/",
    element: <Layout />,
    children: [
        {
            index: true,
            element: <HomePage />
        },
        {
            path: "/about",
            element: <AboutPage />
        },
        {
            path: "/contact",
            element: <Contactpage />
        },
        {
            path: "/favourite-recipies",
            element: <FavouriteRecipies />
        },
        {
            path: "/recipie/:id",
            element: <DetailedRecipie />
        },
    ]
}])

export default routes