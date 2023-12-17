import { createBrowserRouter } from "react-router-dom";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import App from "../App";

const routes = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <App />,
  //     children: [
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  // ],
  //   },
]);

export default routes;
