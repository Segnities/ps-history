import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/root";

const router = createBrowserRouter([
   {
      path: "/",
      Component: Root 
   }
]);

export default router;