import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/header";
import Home, { HOME_PAGE_ROUTE } from "./components/modules/home/home";
import Programming, {
  PROGRAMMING_PAGE_ROUTE,
} from "./components/modules/programming/programming";
import Covid, { COVID_PAGE_ROUTE } from "./components/modules/covid/covid";
import Search, { SEARCH_PAGE_ROUTE } from "./components/modules/search/search";
import Saved, { SAVED_PAGE_ROUTE } from "./components/modules/saved/saved";

export default function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route element={<Home />} path={HOME_PAGE_ROUTE} />
        <Route element={<Programming />} path={PROGRAMMING_PAGE_ROUTE} />
        <Route element={<Covid />} path={COVID_PAGE_ROUTE} />
        <Route element={<Search />} path={SEARCH_PAGE_ROUTE} />
        <Route element={<Saved />} path={SAVED_PAGE_ROUTE} />
      </Routes>
    </BrowserRouter>
  );
}
