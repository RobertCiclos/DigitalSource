import {BrowserRouter, Route, Routes} from "react-router-dom";
import Main from "./Main";
import Home from "./pages/Home"
import ProcesodeCompra1 from "./pages/ProcesodeCompra1";
import ProcesoCompra2_1 from "./pages/ProcesoCompra2_1";
import ProcesoCompra2_2 from "./pages/ProcesoCompra2_2";
import ProcesodeCompra3 from "./pages/ProcesodeCompra3";
import ProcesoCompra4 from "./pages/ProcesoCompra4";
import ProcesoCompra5 from "./pages/ProcesoCompra5";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/"  element={<Main/>}>
            <Route index element={<Home/>}/>
            <Route path="/ProcesodeCompra1" element={<ProcesodeCompra1/>}/>
            <Route path="/ProcesoCompra2-1" element={<ProcesoCompra2_1/>}/>
            <Route path="/ProcesoCompra2-2" element={<ProcesoCompra2_2/>}/>
            <Route path="/ProcesodeCompra3" element={<ProcesodeCompra3/>}/>
            <Route path="/ProcesoCompra4" element={<ProcesoCompra4/>}/>
            <Route path="/ProcesoCompra5" element={<ProcesoCompra5/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
