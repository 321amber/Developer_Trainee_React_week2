import { Component } from "react";
import {createBroweserRoute} from "react-router";
import { Login } from "./Login";
import { Profile } from "./Profile";

export const router = createBroweserRoute([
    {
        path:"/Login",
        element:<Login/>
        
    },
    {
        path:"/Profile",
        element:<Profile/>
    }
])