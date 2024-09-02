import React from "react";
import { Routes, Route } from "react-router-dom";
import Start from "../windows/start/start";
import Scanner from "../windows/scaner/scaner";


export function AppRouter() {
    return (
        <Routes>
            <Route path='/' element={<Start/>} />
            <Route path="/scanner" element={<Scanner/>} />
            <Route path="/*" element={<h1>404</h1>} />
        </Routes>
    );
}