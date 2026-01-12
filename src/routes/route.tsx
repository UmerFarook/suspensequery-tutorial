
import {createBrowserRouter, RouterProvider} from "react-router";
import Members from "../pages/Members.tsx";

function AppRouter() {

    const routes = createBrowserRouter([{
        path:'/',
        element: <Members />,
    },{
        path:'/members',
        element:<Members/>
    }]);

    return (

        <RouterProvider router={routes}/>

    );
}

export default AppRouter;