import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AddCard from "./Pages/AddCard/AddCard";
import Home from "./Pages/Home/Home";

function App() {
  // Our Paths
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/AddCard",
      element: <AddCard />,
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
