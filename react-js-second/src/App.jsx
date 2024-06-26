import {createBrowserRouter,RouterProvider} from "react-router-dom"
import RootLayout from "./RootLayout"
import Home from './components/home/Home';
import Register from "./components/register/Register";
import Login from "./components/login/Login";
import Users from "./components/users/Users";
import './App.css'
import RegisteredUsers from "./components/registered-users/RegisteredUsers";
import UserDetails from "./components/user-details/UserDetails";
import Tech from './components/technologies/Tech'
import Java from './components/java/Java'
import Node  from './components/node/Node'
import Vue from './components/vue/Vue'
import UserDashboard from './components/user-dashboard/UserDashboard'
function App({children})
{ 
   const browserRouter=createBrowserRouter([
   {
       path:'',
       element:<RootLayout/>,
       children:[
        {
          path:'',
          element:<Home/>
        },
        {
          path:'register',
          element:<Register/>
        },
        {
          path:'user-dashboard',
          element:<UserDashboard/>
        },
        {
          path:'login',
          element:<Login/>
        },
        {
          path:'users',
          element:<Users/>
        },
        {
          path:'users/:userId',
          element:<UserDetails/>
        },
        {
          path:'registered-users',
          element:<RegisteredUsers/>
        },
        {
            path:'technologies',
            element:<Tech/>,
            children:[
              {
                path:'java',
                element:<Java/>
              },
              {
                path:'node',
                element:<Node/>
              },
              {
                path:'vue',
                element:<Vue/>
              }
            ]
        }
       ]
   }
   ]);  
   return <RouterProvider router={browserRouter}>
    {children}
   </RouterProvider>
}
export default App;
