import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layouts/Layout";
import Map from "../pages/Map/Map";
import HomePage from "../pages/HomePage/HomePage";
import MyPage from "../pages/MyPage/MyPage";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
    ],
  },
  {
    path: "/map",
    element: <Map />,
  },
  {
    path: "/mypage",
    element: <MyPage />,
  },
]);

export default router;
