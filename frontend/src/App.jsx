import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { Toaster } from "react-hot-toast";
import UpdateModal from "./components/UpdateModal";

const App = () => {
return (
  <>
  <Toaster/>
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/update/:id" element={<UpdateModal />} />
    
      </Routes>
    </BrowserRouter>
   
  </>
)
  
}

export default App