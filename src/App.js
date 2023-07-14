import Navbar from "./layout/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddSchedule from "./schedules/AddSchedule";
import EditSchedule from "./schedules/EditSchedule";
import ViewSchedule from "./schedules/ViewSchedule";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addschedule" element={<AddSchedule />} />
          <Route path="/editschedule/:id" element={<EditSchedule />} />
          <Route path="/viewschedule/:id" element={<ViewSchedule />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
