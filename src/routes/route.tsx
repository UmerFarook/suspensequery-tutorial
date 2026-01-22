
import {createBrowserRouter, RouterProvider} from "react-router";
import Members from "../pages/Members.tsx";
import RefComponent from "../components/RefComponent.tsx";
import React from "react";

function AppRouter() {

    const routes = createBrowserRouter([{
        path:'/',
        element: <Members />,
    },{
        path:'/members',
        element:<Members/>
    },{
        path:'/ref',
        element:<RefComponent/>
    }]);

    return (

        <RouterProvider router={routes}/>

    );
}

export default AppRouter;