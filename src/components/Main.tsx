import { About } from "./About"
import { Footer } from "./Footer"
import { Header } from "./Header"
import { Information } from "./Information"

export const Main = ()=>{


    return(
        <div className="Main">
            < Header />
            <About />
            <Information />
            < Footer/>
        </div>
    )
}