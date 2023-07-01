import { Index } from "."
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Formulario } from "./Formulario";

export const App = () => {
  return (
    <BrowserRouter>
      <div>
        {/* <NavBar /> */}
        <Routes>
          <Route exact path={"/"} element={<Index />} />
          <Route exact path={"/LogIn/"} element={<Formulario />} />
          {/* <Route exact path={"/item/:id"} element={<ItemDetailContainer />} />
          <Route path={"*"} element={<Error404 />} />;  */}
        </Routes>
        {/* <Footer /> */}
      </div>
    </BrowserRouter>
  )
}