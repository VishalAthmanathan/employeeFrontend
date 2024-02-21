import react, { useState } from 'react';
import Swal from 'sweetalert2';
import axios from 'axios';


function SecondForm({ employeeName, employeeId, department, dateOfBirth, gender, designation, salary }) {
    const [contact,setcontact] = useState("");
    const [address,setaddress] = useState("");
    const [shift,setshift] = useState("");

    const addUser = async() => {
        axios.post('/addUser', {
          username: employeeName,
          id: employeeId,
          department: department,
          dob: dateOfBirth,
          gender: gender,
          designation: designation,
          salary: salary,
          contact:contact,
          address:address,
          shift:shift
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
        <form onSubmit={addUser} style={{ padding: '50px', height: 'auto' }}>
          <div className="mb-3">
             <label htmlFor="employeeName" className="form-label">Employee Name</label>
             <input type="text" className="form-control" readonly="readonly"  value={employeeName} />
         </div>

         <div className="mb-3">
             <label htmlFor="employeeId" className="form-label">Employee ID</label>
             <input type="text" className="form-control" readonly="readonly"  name="employeeId" value={employeeId} />
         </div>

         <div className="mb-3">
             <label htmlFor="department" className="form-label">Department</label>
             <select className="form-select" readonly="readonly" name="department"  value={department}>
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
             <input type="date" readonly="readonly" className="form-control"  name="dateOfBirth" value={dateOfBirth} />
         </div>

         <div className="mb-3">
             <label className="form-label">Gender</label>
             <div className="form-check">
                 <input type="radio" className="form-check-input" readonly="readonly" id="male" name="gender" value="Male"  />
                 <label className="form-check-label" htmlFor="male">Male</label>
             </div>
             <div className="form-check">
                 <input type="radio" className="form-check-input" readonly="readonly" id="female" name="gender" value="Female"  />
                 <label className="form-check-label" htmlFor="female">Female</label>
             </div>
         </div>

         <div className="mb-3">
             <label htmlFor="designation" className="form-label">Designation</label>
             <input type="text" readonly="readonly" className="form-control"  name="designation"  value={designation} />
         </div>

         <div className="mb-3">
             <label htmlFor="salary" className="form-label">Salary</label>
             <input type="text" className="form-control" readonly="readonly"  name="salary"  value={salary} />
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
             <input type="text" className="form-control" placeholder="Enter employee shift" name="shift" onChange={(e)=>setshift(e.target.value)} />
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