import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
// import { Form, Button, Col } from 'react-bootstrap';
import './empform.css';
import SecondForm from './nextform';
import { calculateAge } from './utils';


function Empform(){
    const navigate = useNavigate();
    const [isValid, setIsValid] = useState(true);
    const [submitted, setSubmitted] = useState(false);
    const [employeeName, setEmployeeName] = useState("");
    const [employeeId, setEmployeeId] = useState("");
    const [department, setdepartment] = useState("");
    const [dateOfBirth, setdateOfBirth] = useState("");
    const [gender, setgender] = useState("");
    const [designation, setdesignation] = useState("");
    const [salary, setsalary] = useState("");

    const showConfirmation = () => {
        Swal.fire({
          title: 'Are you sure?',
          text: 'Do you want to submit the form?',
          icon: 'question',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, submit it!',
        }).then((result) => {
          if (result.isConfirmed) {
            handleSubmit();
          }
        });
      };

    
      const handleSubmit = (e) => {
        e.preventDefault();
        // showConfirmation();
        setSubmitted(true);
        localStorage.setItem('employeeName', employeeName);
  localStorage.setItem('employeeId', employeeId);
  localStorage.setItem('department', department);
  localStorage.setItem('dateOfBirth', dateOfBirth);
  localStorage.setItem('gender', gender);
  localStorage.setItem('designation', designation);
  localStorage.setItem('salary', salary);
  const age = calculateAge(dateOfBirth);
  if (age < 18) {
    Swal.fire('Error!', 'Age must be at least 18 years old.', 'error');
  }
        navigate('/secondform');
      };

      const addUser = async() => {
        

        axios.post('/addUser', {
          username: employeeName,
          id: employeeId,
          department: department,
          dob: dateOfBirth,
          gender: gender,
          designation: designation,
          salary: salary
        }).then((response)=>{
          console.log(response);
          Swal.fire('Success!', 'Employee added successfully!', 'success');
        })
        .catch((error) => {
            console.error(error);
            Swal.fire('Error!', 'Failed to add employee', 'error');
          });
      }
    
      

    return(
      <div className='rooot'>
      <div className = "header">
        <div className = "header-logo">
          {/* <img src={logo} alt="logo" /> */}
        </div>
        <div className = "header-mid">
          <h3>Employee Details</h3>
        </div>
        
      </div>
      <hr />
      <div style={{ width: '40%', margin: '0 auto', marginTop: '5%', boxShadow: '1px 1px 10px black' }}>
      
      {submitted ? (
        <SecondForm
          employeeName={employeeName}
          employeeId={employeeId}
          department={department}
          dateOfBirth={dateOfBirth}
          gender={gender}
          designation={designation}
          salary={salary}
        />
      ) : (
        <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: 'auto', padding: '20px', borderRadius: '8px', boxShadow: '0 0 10px rgba(0,0,0,0.1)', backgroundColor: '#f4f4f4' }}>
    <div className="mb-3">
        <label htmlFor="employeeName" className="form-label">Employee Name</label>
        <input type="text" className="form-control" placeholder="Enter employee name" name="employeeName" onChange={(e)=>setEmployeeName(e.target.value)} />
    </div>

    <div className="mb-3">
        <label htmlFor="employeeId" className="form-label">Employee ID</label>
        <input type="text" className="form-control" placeholder="Enter employee ID" name="employeeId" onChange={(e)=>setEmployeeId(e.target.value)} />
    </div>

    <div className="mb-3">
        <label htmlFor="department" className="form-label">Department</label>
        <select className="form-select" name="department" onChange={(e)=>setdepartment(e.target.value)}>
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
        <input type="date" className="form-control" placeholder="Enter date of birth" name="dateOfBirth" onChange={(e)=>setdateOfBirth(e.target.value)} />
    </div>

    <div className="mb-3">
        <label className="form-label">Gender</label>
        <div className="form-check">
            <input type="radio" className="form-check-input" id="male" name="gender" value="Male" onChange={(e)=>setgender(e.target.value)} />
            <label className="form-check-label" htmlFor="male">Male</label>
        </div>
        <div className="form-check">
            <input type="radio" className="form-check-input" id="female" name="gender" value="Female" onChange={(e)=>setgender(e.target.value)} />
            <label className="form-check-label" htmlFor="female">Female</label>
        </div>
    </div>

    <div className="mb-3">
        <label htmlFor="designation" className="form-label">Designation</label>
        <input type="text" className="form-control" placeholder="Enter designation" name="designation"  onChange={(e)=>setdesignation(e.target.value)} />
    </div>

    <div className="mb-3">
        <label htmlFor="salary" className="form-label">Salary</label>
        <input type="text" className="form-control" placeholder="Enter salary" name="salary"  onChange={(e)=>setsalary(e.target.value)} />
    </div>

    <div className='mb-3 text-center'>
        <button type='submit' className='btn btn-primary' style={{ backgroundColor: '#007bff', color: '#fff', border: 'none' }}>
            Submit
        </button>
    </div>
</form>


      )}
    </div>
    </div>
  );
  

}

export default Empform;
      
//         <div style={{width:'40%', margin:'0 auto',marginTop:'5%' ,boxShadow:'1px 1px 10px black'}}>
//     <form onSubmit={handleSubmit} style={{padding:'50px', height:'auto'}}>
//         <div className="mb-3">
//             <label htmlFor="employeeName" className="form-label">Employee Name</label>
//             <input type="text" className="form-control" placeholder="Enter employee name" name="employeeName" onChange={(e)=>setEmployeeName(e.target.value)} />
//         </div>

//         <div className="mb-3">
//             <label htmlFor="employeeId" className="form-label">Employee ID</label>
//             <input type="text" className="form-control" placeholder="Enter employee ID" name="employeeId" onChange={(e)=>setEmployeeId(e.target.value)} />
//         </div>

//         <div className="mb-3">
//             <label htmlFor="department" className="form-label">Department</label>
//             <select className="form-select" name="department"  onChange={(e)=>setdepartment(e.target.value)}>
//                 <option value="">Select department</option>
//                 <option value="IT">IT</option>
//                 <option value="HR">HR</option>
//                 <option value="PRODUCTION">PRODUCTION</option>
//                 <option value="MANUFACTURE">MANUFACTURE</option>
//                 <option value="TESTING">TESTING</option>
//             </select>
//         </div>

//         <div className="mb-3">
//             <label htmlFor="dateOfBirth" className="form-label">Date of Birth</label>
//             <input type="date" className="form-control" placeholder="Enter date of birth" name="dateOfBirth" onChange={(e)=>setdateOfBirth(e.target.value)} />
//         </div>

//         <div className="mb-3">
//             <label className="form-label">Gender</label>
//             <div className="form-check">
//                 <input type="radio" className="form-check-input" id="male" name="gender" value="Male" onChange={(e)=>setgender(e.target.value)} />
//                 <label className="form-check-label" htmlFor="male">Male</label>
//             </div>
//             <div className="form-check">
//                 <input type="radio" className="form-check-input" id="female" name="gender" value="Female" onChange={(e)=>setgender(e.target.value)} />
//                 <label className="form-check-label" htmlFor="female">Female</label>
//             </div>
//         </div>

//         <div className="mb-3">
//             <label htmlFor="designation" className="form-label">Designation</label>
//             <input type="text" className="form-control" placeholder="Enter designation" name="designation"  onChange={(e)=>setdesignation(e.target.value)} />
//         </div>

//         <div className="mb-3">
//             <label htmlFor="salary" className="form-label">Salary</label>
//             <input type="text" className="form-control" placeholder="Enter salary" name="salary"  onChange={(e)=>setsalary(e.target.value)} />
//         </div>
//         <div className='mb-3 text-center'>
//         <button type="submit" className="btn btn-primary" onClick={addUser}>Submit</button>
//         </div>
//     </form>
//     )}
// </div>
//     );
// }

// export default Empform;