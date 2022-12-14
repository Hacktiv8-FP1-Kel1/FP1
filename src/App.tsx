import Router from "./router";
import { Provider } from "react-redux";
import { store } from "../src/redux/store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <>
      <Provider store={store}>
        <Router />
        <ToastContainer autoClose={500} />
      </Provider>
    </>
  );
}

export default App;
