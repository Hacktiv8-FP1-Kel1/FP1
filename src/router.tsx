import { BrowserRouter, Routes, Route } from "react-router-dom";
import Container from "./components/elements/container";
import Header from "./components/header/header";
import Home, { HOME_PAGE_ROUTE } from "./components/modules/home/home";
import Programming, {
  PROGRAMMING_PAGE_ROUTE,
} from "./components/modules/programming/programming";
import Covid, { COVID_PAGE_ROUTE } from "./components/modules/covid/covid";

export default function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route element={<Home />} path={HOME_PAGE_ROUTE} />
        <Route element={<Programming />} path={PROGRAMMING_PAGE_ROUTE} />
        <Route element={<Covid />} path={COVID_PAGE_ROUTE} />
      </Routes>
    </BrowserRouter>
  );
}
