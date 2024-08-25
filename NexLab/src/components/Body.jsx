import Landing from "./Landing";
import MouseFollower from "../helpers/MouseFollower";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./AppLayout";
import Login from "./Login";
import SignUp from "./SignUp"
import DashBoard from "./DashBoard";

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
                },{
                    path:'/dashboard',
                    element:<DashBoard/>
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