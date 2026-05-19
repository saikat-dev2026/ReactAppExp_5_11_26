import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
/*import Employee from "./pages/Employee";*/
import EmployeeForm from "./pages/EmployeeForm";
import ManagerForm from "./pages/ManagerForm";
import ViewEmployee from './pages/ViewEmployee';
import ViewManager from './pages/ViewManager';

/*import './App.css'*/


function AppComponent() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="employeeform" element={<EmployeeForm />} />
                    <Route path="viewemployee" element={<ViewEmployee />} />
                    <Route path="managerform" element={<ManagerForm />} />
                    <Route path="viewmanager" element={<ViewManager />} />
                   
                </Route>
            </Routes>
        </BrowserRouter>
      
    );
}

export default AppComponent;


