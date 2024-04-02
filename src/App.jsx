import { RouterProvider } from "react-router-dom";
import { Toaster } from "sonner";
import routes from "./router/Router";
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <HomePage />,
//   },
// ]);

function App() {
  return (
    <>
      <Toaster />
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
