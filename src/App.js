import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import About from "./components/about/About";
import Home from "./components/home/Home";
import Users from "./components/users/Users";
import Main from "./layout-screen/main/Main";
import UserDetails from "./components/userDetails/UserDetails";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        { path: "/", element: <Home></Home> },
        { path: "/home", element: <Home></Home> },
        { path: "/users", element: <Users></Users>, 
          loader: async () => {
            return fetch(`https://jsonplaceholder.typicode.com/users/`);
          } 
        },
        {
          path:'users/user/:userId',
          element:<UserDetails></UserDetails>,
          loader: async({params})=>{
            return fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`);
          }
        },
        { path: "/about", element: <About></About> },
      ],
    },
    { path:'*', element:<h2>404 Route Not Found</h2>}
  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
