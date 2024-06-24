import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import Home from './components/home/Home';
import Register from './components/register/Register';
import RootLayout from './RootLayout';
function App({children})
{
  const browserRouter=createBrowserRouter([
      {
        path:"",
        element:<RootLayout/>,
        children:[
          {
            path:"",
            element:<Home/>
          },
          {
            path:"register",
            element:<Register/>
          }
        ]
      }
  ])
 return<RouterProvider router={browserRouter}>
  {children}
 </RouterProvider>
}
export default App;