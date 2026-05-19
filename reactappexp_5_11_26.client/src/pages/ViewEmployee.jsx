import { useEffect, useState } from 'react';
import axios from 'axios';
// import loadingGif from '../assets/loader.gif';
import ManagerListComponent from '../component/ManagerListComponent';
function ViewEmployee() {
    const [employees, setEmployees] = useState([]);
    const [selectedDepartment, setSelectedDepartment] = useState('');
    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(null);
    // useEffect(() => {

      //  if (!selectedDepartment) return;
        // initially Failed to load data..after refresh load data ...how to load data at loading instantly.. to fix this
    //     const fetchEmployees = async (retry=2) => {
    //         try {

    //             const res = await axios.get(`/api/Employee/getEmployeeBydeptId/${selectedDepartment}`);
    //             setEmployees(res.data);
    //             setError('');
    //         } catch (err) {
    //             console.error(err);
    //             if (retry > 0) {
    //                 setTimeout(() => fetchEmployees(retry - 1), 5000);
    //             } else {
    //                 setError('Failed to load data');
    //             }
    //         } finally {
    //             setLoading(false);
    //         }
    //     };
    //     fetchEmployees();
    // }, [selectedDepartment]);
    // if (loading) return <img style={{ height: "70px", width:"220px" } } src={loadingGif} alt="Loading..." />;
    // if (error) return <p>{error}</p>;
    useEffect(() => {

        if (!selectedDepartment) return;

        const fetchEmployees = async () => {

            try {

                const response = await axios.get(
                    `/api/Employee/getEmployeeBydeptId/${selectedDepartment}`
                );

                setEmployees(response.data);

            }
            catch (error) {

                console.error(error);

            }
        };

        fetchEmployees();

    }, [selectedDepartment]);

    return (
     
        <div>
           <p>
                <h3>Manager List :</h3>
                <ManagerListComponent onDepartmentChange={setSelectedDepartment } />
            </p>
            <p>Employee List :</p>
            <h3>
                Department : {selectedDepartment}
            </h3>
            <table className="table table-bordered ">
                <thead>
                    <tr className="table-info">
                        <th>Employee Name</th>
                        <th>Employee Department</th>
                        <th>Employee Salary</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map(emp => (
                        <tr key={emp.id}>
                            <td>{emp.name}</td>
                            <td>{emp.department}</td>
                            <td>{emp.salary}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
  );
}

export default ViewEmployee;