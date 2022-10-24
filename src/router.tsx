import { BrowserRouter, Routes, Route } from "react-router-dom";
import Container from "./components/elements/container";
import Header from "./components/header/header";
import Home, { HOME_PAGE_ROUTE } from "./components/modules/home/home";

export default function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route element={<Home />} path={HOME_PAGE_ROUTE} />
      </Routes>
    </BrowserRouter>
  );
}
