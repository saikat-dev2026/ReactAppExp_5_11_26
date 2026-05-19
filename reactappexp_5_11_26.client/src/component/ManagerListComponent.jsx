import { useEffect, useState } from 'react';
import axios from 'axios';

function ManagerListComponent({ onDepartmentChange}) {
    const [managers, setManagers] = useState([]);
    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(null);
    const [selectedManager, SetselectManagers] = useState('');

    // useEffect(() => {

    //     const getManagers = async (retry = 2) => {

    //         try {

    //             const response = await axios.get(
    //                 '/api/EmployeeManager/getManager'
    //             );

    //             setManagers(response.data);

    //         }
    //         catch (error) {

    //             console.error(error);
    //             if (retry > 0) {
    //                 setTimeout(() => getManagers(retry - 1), 3000);
    //             } else {
    //                 setError('Failed to load data');
    //             }

    //         }
    //         finally {
    //             setLoading(false);
    //         }
    //     };

    //     getManagers();

    // }, []);
    useEffect(() => {

        const getManagers = async () => {

            try {

                const response = await axios.get(
                    '/api/EmployeeManager/getManager'
                );

                setManagers(response.data);

            }
            catch (error) {

                console.error(error);

            }
        };

        getManagers();

    }, []);


    const handleChange = (e) => {
        const managerDept = e.target.value;
        SetselectManagers(managerDept);
        const selectedManager = managers.find(x => x.department == managerDept);
        if (selectedManager) {
            onDepartmentChange(selectedManager.department);
        }
    };
    // if (loading) return <p>Loading....</p>;
    // if (error) return <p>{error}</p>;
  return (
      <div>

          <select value={selectedManager} onChange={handleChange}>

              <option value="0">
                  -- Select Manager --
              </option>

              {managers.map(m => (

                  <option
                      key={m.id}
                      value={m.department}
                  >
                      {m.name}-{m.department}
                  </option>

              ))}

          </select>
      
      </div>
  );
}

export default ManagerListComponent;