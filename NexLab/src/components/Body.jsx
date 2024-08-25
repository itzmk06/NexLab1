import Landing from "./Landing";
import MouseFollower from "../helpers/MouseFollower";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./AppLayout";
import Login from "./Login";
import SignUp from "./SignUp"

const Body=()=>{
    const appRouter=createBrowserRouter([
        {
            path:'/',
            element:<AppLayout/>,
            children:[
                {
                    path:'/',
                    element:<Landing/>
                },
                {
                    path:'/login',
                    element:<Login/>
                },
                {
                    path:'/signup',
                    element:<SignUp/>
                }
            ]
        }
    ]);
    return(
        <>
            <RouterProvider router={appRouter}/>
            <MouseFollower/>
        </>
    )

}

export default Body;