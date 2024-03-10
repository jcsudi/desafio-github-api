import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Routes/Home";
import HomeBody from "./Routes/Home/HomeBody";
import Before from "./Routes/Home/Before";

function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<HomeBody  />} />
          <Route path="before" element={<Before/>} />


        </Route>

      </Routes>
    
    </BrowserRouter>
  );
}

export default App
