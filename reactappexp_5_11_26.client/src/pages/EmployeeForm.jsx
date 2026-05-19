import { useState } from 'react';
import axios  from 'axios';

function EmployeeForm() {
    const [employee, setEmployee] = useState({ name: "", department: "", salary: "" });

    const handleChange = (e) => {
        setEmployee({
            ...employee,
            [e.target.name]: e.target.value
        })
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post('api/Employee', employee);
        alert('Emplotee Info Added Successfully');
    };
  return (
      <form onSubmit={handleSubmit}>

          <table className="table table-bordered">
              <thead>
              <tr className="table-info">
                  <th align="left">Employee Info</th>
                  <th></th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                      <td align="left">Employee Name :</td>
                      <td> <input className="input-box" name="name" placeholder="Employee Name" onChange={handleChange} /></td>
                  </tr>
                  <tr>
                      <td align="left">Employee Department :</td>
                      <td><input className="input-box" name="department" placeholder="Employee Department" onChange={handleChange} /></td>
                  </tr>
                  <tr>
                      <td align="left">Employee Salary :</td>
                      <td> <input className="input-box" name="salary" placeholder="Employee Salary" onChange={handleChange} /></td>
                  </tr>
                  <tr></tr>
                  <tr className="table-info">
                  <td></td>
                      <td align="right"> <button type="submit" className="btn btn-info">Add Employee Info</button></td>
                  </tr>
              </tbody>
          </table>
         
          
         

         
      </form>
  );
}

export default EmployeeForm;