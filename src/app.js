import React from "react";
import ReactDom from "react-dom/client";
import MainPage from "./components/MainPage";




const App=()=>{
    return (
        <>
        <MainPage/>
        </>
    )
}


const root=ReactDom.createRoot(document.getElementById("root"));
root.render(<App/>)