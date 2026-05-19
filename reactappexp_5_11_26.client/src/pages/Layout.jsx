import { Link, Outlet } from 'react-router-dom';
//import Home from '../pages/Home';
//import About from '../pages/About';
import '../styles/layout.css';
function Layout() {
    return (
  
      <div className="layout">

          <header className="header">
              <h2>Dashboard</h2>
          </header>

          <aside className="sidebar">
                <nav >
                    <table style={{ margin: "10px" }}>
                        <tr><td> <Link to="/" end>Home</Link></td></tr>
                        <tr><td><Link to="/about">About</Link></td></tr>
                        <tr><td><Link to="/employeeform">Add Employee</Link></td></tr>
                        <tr><td><Link to="/viewemployee">View Employee</Link></td></tr>
                        <tr><td><Link to="/managerform">Add Manager</Link></td></tr>
                        <tr><td><Link to="/viewmanager">View Manager</Link></td></tr>
                    </table>
                      
                     
                   
                </nav>
                   
          </aside>

          <main className="content">
              <Outlet />
          </main>

            </div>
    
  );
}

export default Layout;