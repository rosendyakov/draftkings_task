import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { Results } from "./pages/searchResults/Results";
import { ErrorPage } from "./pages/errorPage/ErrorPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { PersonDetails } from "./components/details/PersonDetails";
import { PlanetDetails } from "./components/details/PlanetDetails";
import { VehicleDetails } from "./components/details/VehicleDetails";
import { StarshipDetails } from "./components/details/StarshipDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/search-results",
    element: <Results />,
  },
  {
    path: "/people/:id/",
    element: <PersonDetails />,
  },
  {
    path: "/planets/:id",
    element: <PlanetDetails />,
  },
  {
    path: "/vehicles/:id",
    element: <VehicleDetails />,
  },
  {
    path: "/starships/:id",
    element: <StarshipDetails />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </React.StrictMode>
);
