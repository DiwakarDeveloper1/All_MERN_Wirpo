import Header from "./Header/Header"
import Home from "./Home/Home"
import Addbook from "./Addbook/Addbook"
import Managebook from "./Managebook/Managebook"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Bookdetails from "./Bookdetails/Bookdetails"
function App() {
 
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/add-books" element={<Addbook />} />
          <Route path="/manage-books" element={<Managebook />} />
          <Route path="/manage-books/:id" element={<Bookdetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
