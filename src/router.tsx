import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/header";

export default function Router() {
  return (
    <BrowserRouter>
      <Header />
      {/* <Routes>
        <Router></Router>
      </Routes> */}
    </BrowserRouter>
  );
}
