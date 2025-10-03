import { createBrowserRouter, RouterProvider} from "react-router-dom";
import { Home } from "./Home";
import { Profile } from "./Profile";
import { Login } from "./Login";
export const ReactRouter = ()=>{
    const router = createBrowserRouter([
        {
            path:"/home",
            element: <Home/>
        },
        {
            path:"/profile",
            element: <Profile/>
        },
        {
            path:"/login",
            element: <Login/>
        },
       

    ]
        )

    return (
        <RouterProvider router = {router}/>
    )
}