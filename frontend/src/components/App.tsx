import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "state/store";
import Home from "pages/home";
import GlobalStyle from "./globalStyle";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
};

export default App;
