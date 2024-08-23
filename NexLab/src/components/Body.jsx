import Landing from "./Landing";
import MouseFollower from "../helpers/MouseFollower";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./AppLayout";
import Home from "./Home";

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
                    path:'/home',
                    element:<Home/>
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