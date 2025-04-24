import { createBrowserRouter } from "react-router-dom";
import GameDetailPage from "./components/pages/GameDetailPage";
import HomePage from "./components/pages/HomePage";
import Layout from "./components/pages/layout";
import ErrorPage from "./components/pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/games/:gameId", element: <GameDetailPage /> },
    ],
  },
]);

export default router;
