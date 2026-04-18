import { Toaster } from "@/components/ui/sonner";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { Outlet, createRootRoute, createRoute } from "@tanstack/react-router";
import { Suspense, lazy } from "react";
import { Layout } from "./components/Layout";
import { LoadingSpinner } from "./components/LoadingSpinner";

const HomePage = lazy(() => import("./pages/Home"));
const SearchPage = lazy(() => import("./pages/Search"));
const RegisterPage = lazy(() => import("./pages/Register"));
const DashboardPage = lazy(() => import("./pages/Dashboard"));

const rootRoute = createRootRoute({
  component: () => (
    <Layout>
      <Suspense
        fallback={
          <div className="flex min-h-[40vh] items-center justify-center">
            <LoadingSpinner size="lg" />
          </div>
        }
      >
        <Outlet />
      </Suspense>
      <Toaster richColors position="top-right" />
    </Layout>
  ),
});

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
});

const searchRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/search",
  component: SearchPage,
});

const registerRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/register",
  component: RegisterPage,
});

const dashboardRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/dashboard",
  component: DashboardPage,
});

const routeTree = rootRoute.addChildren([
  homeRoute,
  searchRoute,
  registerRoute,
  dashboardRoute,
]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
