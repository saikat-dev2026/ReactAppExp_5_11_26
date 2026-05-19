import { useState } from 'react';
import axios from 'axios';
function ManagerForm() {

    const [manager, setManager] = useState({ name:"",department:"",salary:""});

    const handleChange = (e) => {
        setManager({
            ...manager,
            [e.target.name]: e.target.value
        })
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post('api/EmployeeManager', manager);
        alert('Manager Info Added Successfully');
    };
  return (
      <form onSubmit={handleSubmit}>

          <table className="table table-bordered">
              <thead>
                  <tr className="table-info">
                      <th align="left">Manager Info</th>
                      <th></th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                      <td align="left">Manager Name :</td>
                      <td> <input className="input-box" name="name" placeholder="Manager Name" onChange={handleChange} /></td>
                  </tr>
                  <tr>
                      <td align="left">Manager Department :</td>
                      <td><input className="input-box" name="department" placeholder="Manager Department" onChange={handleChange} /></td>
                  </tr>
                  <tr>
                      <td align="left">Manager Salary :</td>
                      <td> <input className="input-box" name="salary" placeholder="Manager Salary" onChange={handleChange} /></td>
                  </tr>
                  <tr></tr>
                  <tr className="table-info">
                      <td></td>
                      <td align="right"> <button type="submit" className="btn btn-info">Add Manager Info</button></td>
                  </tr>
              </tbody>
          </table>





      </form>
  );
}

export default ManagerForm;