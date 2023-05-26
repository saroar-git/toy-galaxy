import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Error from "../pages/Error/Error";
import Home from "../pages/Home/Home";
import Blog from "../pages/Blogs/Blog";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Terms from "../pages/Terms/Terms";
import PrivateRoute from "./PrivateRoute";
import Details from "../pages/Details/Details";
import AllToys from "../pages/Toys/AllToys";
import AddAToy from "../pages/Toys/AddAToy";
import MyToys from "../pages/Toys/MyToys";
import UpdateMyToy from "../pages/Toys/UpdateMyToy";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/blogs',
        element: <Blog />
      },
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'register',
        element: <Register />
      },
      {
        path: '/terms',
        element: <Terms />
      },
      {
        path: '/details/:id',
        element: <PrivateRoute><Details /></PrivateRoute>,
        loader: ({ params }) => fetch(`https://toy-galaxy-server.vercel.app/toys/${params.id}`)
      },
      {
        path: '/allToys',
        element: <AllToys />
      },
      {
        path: '/addToys',
        element: <PrivateRoute><AddAToy /></PrivateRoute>
      },
      {
        path: '/myToys',
        element: <PrivateRoute><MyToys /></PrivateRoute>,
      },
      {
        path: '/update/:id',
        element: <PrivateRoute><UpdateMyToy /></PrivateRoute>,
        loader: ({ params }) => fetch(`https://toy-galaxy-server.vercel.app/toys/${params.id}`)
      }
    ]
  },
]
);


export default router;