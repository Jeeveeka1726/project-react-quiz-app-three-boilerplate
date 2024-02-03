import React from "react";
import {Route, Routes} from "react-router-dom"
import HomeComponent from './Component/HomeComponent'
import QuizComponent from './Component/QuizComponent'
import ResultComponent from './Component/ResultComponent'

const AllRoutes=()=>{
    return (
        <>
        <Routes>
            <Route path="/" element={<HomeComponent />}></Route>
            <Route path="/quiz" element={<QuizComponent />}></Route>
            <Route path="/result" element={<ResultComponent />}></Route>
        </Routes>

        </>
    )
}

export default AllRoutes;