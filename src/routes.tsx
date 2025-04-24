import { createBrowserRouter } from "react-router-dom";
import GameDetailPage from "./components/pages/GameDetailPage";
import HomePage from "./components/pages/HomePage";
import Layout from "./components/pages/layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/games/:gameId", element: <GameDetailPage /> },
    ],
  },
]);

export default router;
