import { createBrowserRouter } from "react-router-dom";
import GameDetailPage from "./components/pages/GameDetailPage";
import HomePage from "./components/pages/HomePage";
import ErrorPage from "./components/pages/ErrorPage";
import Layout from "./components/pages/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/games/:slug", element: <GameDetailPage /> },
    ],
  },
]);

export default router;
