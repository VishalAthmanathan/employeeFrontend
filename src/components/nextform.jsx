import react, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function SecondForm({ employeeName, employeeId, department, dateOfBirth, gender, designation, salary }) {
    const navigate = useNavigate();
    const [contact,setcontact] = useState("");
    const [address,setaddress] = useState("");
    const [Shift,setShift] = useState("");
    const storedEmployeeName = localStorage.getItem('employeeName') || '';
const storedEmployeeId = localStorage.getItem('employeeId') || '';
const storedDepartment = localStorage.getItem('department') || '';
const storedDateOfBirth = localStorage.getItem('dateOfBirth') || '';
const storedGender = localStorage.getItem('gender') || '';
const storedDesignation = localStorage.getItem('designation') || '';
const storedSalary = localStorage.getItem('salary') || '';
    
    
    const addUser = async(e) => {
        axios.post('/addUser', {
          username: storedEmployeeName,
          id: storedEmployeeId,
          department: storedDepartment,
          dob: storedDateOfBirth,
          gender: storedGender,
          designation: storedDesignation,
          salary: storedSalary,
          contact:contact,
          address:address,
          Shift:Shift
        }).then((response)=>{
          console.log(response);
          Swal.fire('Success!', 'Employee added successfully!', 'success');
          navigate('/viewUser');
        })
        .catch((error) => {
            console.error(error);
            Swal.fire('Error!', 'Failed to add employee', 'error');
          });
      }

    return(
        <form onSubmit={addUser} style={{ maxWidth: '400px', margin: 'auto', padding: '20px', borderRadius: '8px', boxShadow: '0 0 10px rgba(0,0,0,0.1)', backgroundColor: '#f4f4f4' }}>
          <div className="mb-3">
             <label htmlFor="employeeName" className="form-label">Employee Name</label>
             <input type="text" className="form-control" readonly="readonly"  value={storedEmployeeName} />
         </div>

         <div className="mb-3">
             <label htmlFor="employeeId" className="form-label">Employee ID</label>
             <input type="text" className="form-control" readonly="readonly"  name="employeeId" value={storedEmployeeId} />
         </div>

         <div className="mb-3">
             <label htmlFor="department" className="form-label">Department</label>
             <select className="form-select" readonly="readonly" name="department"  value={storedDepartment}>
                 <option value="">Select department</option>
                 <option value="IT">IT</option>
                 <option value="HR">HR</option>
                 <option value="PRODUCTION">PRODUCTION</option>
                 <option value="MANUFACTURE">MANUFACTURE</option>
                 <option value="TESTING">TESTING</option>
             </select>
         </div>

         <div className="mb-3">
             <label htmlFor="dateOfBirth" className="form-label">Date of Birth</label>
             <input type="date" readonly="readonly" className="form-control"  name="dateOfBirth" value={storedDateOfBirth} />
         </div>

         <div className="mb-3">
    <label className="form-label">Gender</label>
    <div className="form-check">
      <input type="radio" className="form-check-input" disabled id="male" name="gender" value="Male" checked={storedGender === 'Male'} />
      <label className="form-check-label" htmlFor="male">Male</label>
    </div>
    <div className="form-check">
      <input type="radio" className="form-check-input" disabled id="female" name="gender" value="Female" checked={storedGender === 'Female'} />
      <label className="form-check-label" htmlFor="female">Female</label>
    </div>
  </div>

         <div className="mb-3">
             <label htmlFor="designation" className="form-label">Designation</label>
             <input type="text" readonly="readonly" className="form-control"  name="designation"  value={storedDesignation} />
         </div>

         <div className="mb-3">
             <label htmlFor="salary" className="form-label">Salary</label>
             <input type="text" className="form-control" readonly="readonly"  name="salary"  value={storedSalary} />
         </div>
         <div className="mb-3">
             <label htmlFor="contact" className="form-label">Employee Contact</label>
             <input type="text" className="form-control" placeholder="Enter employee contact" name="contact" onChange={(e)=>setcontact(e.target.value)} />
         </div>
         <div className="mb-3">
             <label htmlFor="address" className="form-label">Employee Address</label>
             <input type="text" className="form-control" placeholder="Enter employee address" name="address" onChange={(e)=>setaddress(e.target.value)} />
         </div>
         <div className="mb-3">
             <label htmlFor="eshift" className="form-label">Employee Shift</label>
             <input type="text" className="form-control" placeholder="Enter employee shift" name="shift" onChange={(e)=>setShift(e.target.value)} />
         </div>
          <div className='mb-3 text-center'>
            <button type='submit' className='btn btn-primary'>
              Submit
            </button>
          </div>
        </form>


    )
}

export default SecondForm;