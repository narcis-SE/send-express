import { Header } from "./Header"
import { Home } from "./Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Information } from "./Information";
import { Footer } from "./Footer";

export const Main = ()=>{


    return(
        <div className="Main">
            <Router>
                < Header />
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/about" element={<Information/>}/>
                    <Route path="/footer" element={<Footer/>}/>
                </Routes>
            </Router>
        </div>
    )
}