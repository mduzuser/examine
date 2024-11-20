//rrd
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//layouts
import MainLayout from "./layouts/MainLayout";

//pages
import { Home, About, Items, Pages, Contact, Login } from "./pages";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/items",
          element: <Items />,
        },
        {
          path: "/pages",
          element: <Pages />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/login",
          element: <Login />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
