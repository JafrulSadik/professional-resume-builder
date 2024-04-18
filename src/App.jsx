import { RouterProvider } from "react-router-dom";
import { Toaster } from "sonner";
import routes from "./router/Router";

function App() {
  return (
    <>
      <Toaster />
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
