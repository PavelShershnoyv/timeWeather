import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Time from "./components/Time/Time";
import Weather from "./components/Weather/Weather";
import Main from "./components/Main/Main";
import { Provider } from "react-redux";
import { store } from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="time" element={<Time />} />
            <Route path="weather" element={<Weather />} />
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
