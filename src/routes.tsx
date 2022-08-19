import { BrowserRouter, Routes,Route, Link } from "react-router-dom";
import { Home, Pokedex, PokeList, Pokemon } from "./pages";

export const Router = () =>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/pokedex" element={<Pokedex />} />
                <Route path="/pokelist/:id" element={<PokeList />} />
                <Route path='/pokemon' element={<Pokemon />}/>
            </Routes>
        </BrowserRouter>
    )
}