import 'bootstrap/dist/css/bootstrap.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './RootLayout';
import Home from './components/home/Home';
import Register from './components/register/Register';
import RegisteredUsers from './components/registered-users/RegisteredUsers'
function App({children}) {
    const browserRouter = createBrowserRouter([
        {
            path: '',
            element: <RootLayout />,
            children:[
                {
                    path:'',
                    element:<Home/>
                },{
                    path:'register',
                    element:<Register/>
                },
                {
                    path:'registered-users',
                    element:<RegisteredUsers/>
                }
            ]
        }
    ]);
    return <RouterProvider router={browserRouter}>
     {children}
    </RouterProvider>
 }
 export default App;
 