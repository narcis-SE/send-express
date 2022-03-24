import React from "react";
import { Information } from "./Information";
import { About } from "./About";
import { Footer } from "./Footer";

export const Home = ()=>{

    return(
        <div className="Home">
                <About />
                <Information />
                <Footer />
        </div>
    )
}