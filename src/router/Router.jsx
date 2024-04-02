import { createBrowserRouter } from "react-router-dom";
import CreatePage from "../pages/CreatePage/CreatePage";
import HomePage from "../pages/Homepage/HomePage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/create",
    element: <CreatePage />,
  },
]);

export default routes;
