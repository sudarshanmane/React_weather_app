import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Weather from "./Components/Pages/Weather";
import ErrorPage from "./Components/Pages/ErrorPage/ErrorPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Navigate to={"/home/weather/city"}></Navigate>}
        ></Route>
        <Route path="/home/weather/:city" element={<Weather></Weather>}></Route>
        <Route path="*" element={<ErrorPage></ErrorPage>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
