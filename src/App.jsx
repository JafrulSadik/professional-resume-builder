import { useState } from "react";
import { RouterProvider } from "react-router-dom";
import { Toaster } from "sonner";
import { DataContext } from "./Provider/Context";
import routes from "./router/Router";

function App() {
  const [data, setData] = useState("HI");

  return (
    <DataContext.Provider value={{ data, setData }}>
      <Toaster />
      <RouterProvider router={routes} />
    </DataContext.Provider>
  );
}

export default App;
