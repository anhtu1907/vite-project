import type { RouteProps } from "react-router";

import {HomePage} from "@/pages/Home";
import {LoginPage} from "@/pages/Login";
import { NotFoundPage } from "@/pages/Notfound";

import { AppRoutes, routePaths } from "@/shared/config";

export const routeConfig: RouteProps[]=[
    {
        path: routePaths[AppRoutes.HOME],
        element: <HomePage />
    },
    {
        path: routePaths[AppRoutes.LOGIN],
        element: <LoginPage />
    },
    {
        path: routePaths[AppRoutes.NOTFOUND],
        element: <NotFoundPage/>
    }
]