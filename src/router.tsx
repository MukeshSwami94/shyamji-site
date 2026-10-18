import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

export const getRouter = () => {
  const queryClient = new QueryClient();

  const router = createRouter({
    routeTree,
    // Matches the deploy host: "/" locally, "/<repo-name>" on GitHub Pages
    // (Vite injects import.meta.env.BASE_URL from the build's base setting).
    basepath: import.meta.env.BASE_URL || "/",
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
  });

  return router;
};
