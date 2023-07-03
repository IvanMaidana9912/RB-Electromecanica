import { Index } from "./Index"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Formulario } from "./Formulario";
import { Register } from "./Register";

export const App = () => {
  return (
    <BrowserRouter>
      <div>
        {/* <NavBar /> */}
        <Routes>
          <Route exact path={"/"} element={<Index />} />
          <Route exact path={"/LogIn/"} element={<Formulario />} />
          <Route exact path={"/Register"} element={<Register />} />
          {/* <Route path={"*"} element={<Error404 />} /> */}
        </Routes>
        {/* <Footer /> */}
      </div>
    </BrowserRouter>
  )
}