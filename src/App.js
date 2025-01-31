import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import Contact from "./Pages/Contact";

function App() {
  return (
    <>
      <div>
        <Navbar/>
      </div>
      <section>
        <Routes>
          <Route path='/' index element={<Home/>}></Route>
          <Route path='/Products' element={<Products/>}></Route>
          <Route path='/Contact' element={<Contact/>}></Route>
        </Routes>
      </section>
    </>
  );
}

export default App;
