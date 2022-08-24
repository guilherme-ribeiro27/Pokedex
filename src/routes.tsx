import { BrowserRouter, Routes,Route, Link } from "react-router-dom";
import { Home, Regions, Pokedex, Pokemon } from "./pages";

export const Router = () =>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/regions" element={<Regions />} />
                <Route path="/pokedex/:name" element={<Pokedex />} />
                <Route path='/pokemon' element={<Pokemon />}/>
            </Routes>
        </BrowserRouter>
    )
}