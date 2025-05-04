import { BrowserRouter, Routes, Route } from "react-router-dom";
import FilterItems from "./components/FilterItems";
import BorrowedBooks from "./components/BorrowedBooks";
import ReturnedBooks from "./components/ReturnedBooks";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

function App() {
  return <>
    <BrowserRouter>
      <Navbar />
      <Routes >
        <Route path="/" exact element={<Home />} />
        <Route path="/books" element={<FilterItems />} />
        <Route path="/borrowed" element={<BorrowedBooks />} />
        <Route path="/returned" element={<ReturnedBooks />} />
      </Routes  >
    </BrowserRouter>
  </>
}

export default App;
