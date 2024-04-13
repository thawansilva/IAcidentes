import { createBrowserRouter } from "react-router-dom";
import { Root } from "./routes/Root.jsx";
import { Recomendation } from "./routes/Recomendation.jsx";
import { ErrorPage } from "./routes/ErrorPage.jsx";
import { Overview } from "./routes/Overview.jsx";
import { Home } from "./routes/Home.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "visaogeral", element: <Overview /> },
      { path: "recomendacao", element: <Recomendation /> },
    ],
  },
]);
