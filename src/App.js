import React from "react";

import { Brand, Cta, Navbar, Article } from "./components/index";
import { Header, Footer, Blog, Features, Possibility, WhatGPT3 } from "./containers/index";
import "./App.css";
import "./index.css";

const App = () => {
    return (
        <div className="App">
            <div className="gradient__bg">
                <Navbar />
                <Header />
            </div>
            <Brand />
            <WhatGPT3 />
            <Features />
            <Possibility />
            <Cta />
            <Blog />
            <Footer />
        </div>
    )
}

export default App;