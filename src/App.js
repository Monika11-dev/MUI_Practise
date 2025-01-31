import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Products from "./Pages/Products";
import Contact from "./Pages/Contact";
import { ThemeProvider} from "@mui/styles";
import { useTheme } from "@mui/material";

function App() {
  const theme = useTheme();
  console.log(theme);
  return (
    <>
      <ThemeProvider theme={theme}>
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
      </ThemeProvider>
    </>
  );
}

export default App;
