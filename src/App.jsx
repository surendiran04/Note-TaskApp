import React from "react";
import "./App.css"
import Sidebar from "./Components/Sidebar";
import Home from "./Pages/Home";
import Search from "./Pages/Search";
import Notes from "./Pages/Notes";
import Task from "./Pages/Task";
import { Routes, Route, BrowserRouter } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <div className="container mx-0 wd-100">
        <div className="row">
        <div className="col-md-3 col-lg-3 p-0 col-6 col-sm-4 ">
          <Sidebar />
        </div>
          <div className="col-md-9 col-lg-9 main-bg">
            <Routes>
              <Route index path="/Home" element={<Home />} />
              <Route path="/Search" element={<Search />} />
              <Route path="/Notes" element={<Notes />} />
              <Route path="/Tasks" element={<Task />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}
