import React from "react";
import Homepage from "./Pages/Homepage/Homepage";
import store from "./store";
import { Provider } from "react-redux";
import { Route, Routes } from 'react-router-dom';
import DetailsPage from "./Pages/DetailsPage/detailsPage";
import MyCartPage from "./Pages/MyCartPage/myCartPage";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Routes>
          <Route path="*" element={<Homepage />} />
          <Route path="/home" element={<Homepage />} />
          <Route path="/productdetail" element={<DetailsPage />} />
          <Route path="/mycart" element={<MyCartPage/>}/>
        </Routes>
      </Provider>
    </div>
  );
}

export default App;
