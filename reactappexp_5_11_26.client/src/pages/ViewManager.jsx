import { useEffect, useState } from 'react';
import axios from 'axios';
import loadingGif from '../assets/loader.gif';

function ViewManager() {
    const [managers, setManagers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {

        // initially Failed to load data..after refresh load data ...how to load data at loading instantly.. to fix this
        const fetchManagers = async (retry = 2) => {
            try {
                const res = await axios.get('api/EmployeeManager');
                setManagers(res.data);
                setError('');
            } catch (err) {
                console.error(err);
                if (retry > 0) {
                    setTimeout(() => fetchManagers(retry - 1), 10000);
                } else {
                    setError('Failed to load data');
                }
            } finally {
                setLoading(false);
            }
        };
        fetchManagers();
    }, []);
    if (loading) return <img style={{ height: "70px", width: "220px" }} src={loadingGif} alt="Loading..." />;
    if (error) return <p>{error}</p>;
  return (
      <div>
          <p>Employee Manager List</p>
          <table className="table table-bordered ">
              <thead>
                  <tr className="table-info">
                      <th>Employee Manager Name</th>
                      <th>Employee Managaer Department</th>
                      <th>Employee Manager Salary</th>
                  </tr>
              </thead>
              <tbody>
                  {managers.map(mgr => (
                      <tr key={mgr.id}>
                          <td>{mgr.name}</td>
                          <td>{mgr.department}</td>
                          <td>{mgr.salary}</td>
                      </tr>
                  ))}
              </tbody>
          </table>
      </div>
      
  );
}

export default ViewManager;