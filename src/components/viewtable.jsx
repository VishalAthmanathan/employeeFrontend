import react, {useState,useEffect} from "react";
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';



function Table(){
  const tableContainerStyle = {
    width: '80%',
    marginLeft: '10%',
    marginRight: '10%'

  };

  
  
    const [data, setData] = useState([]);
    const tableStyle = { width: '100%' };
    useEffect(()=>{
        const fetchdata= async () =>{
            try {
                console.log('Before request');
                const response = await axios.get('/getBooks');
                console.log('After request');
                console.log(response.data);
                const transformedData = response.data.map(item => ({
                  id: item.id.toString(),
                  username: item.id.toString(),
                  department: item.department.toString(),
                  dob: item.dob.toString(),
                  gender: item.gender.toString(),
                  designation: item.designation.toString(),
                  salary: item.salary.toString(),
                  contact:item.contact.toString(),
                  address:item.address.toString(),
                  Shift:item.shift.toString()
                //   publishdate: new Date(item.publishdate).toLocaleDateString()
                }));
                setData(transformedData);
                console.log(data);
              } catch (error) {
                console.error('Error fetching data:', error);
              }
        };
        fetchdata();
    },[])

    useEffect(() => {
      console.log(data);
    }, [data]);

    const columns = [
        { field: 'id' , headerName: 'ID', width: 250 },
        { field: 'username', headerName: 'Username', width: 250 },
        { field: 'department', headerName: 'Department', width: 350 },
        { field: 'dob', headerName: 'DOB', width: 150 },
        { field: 'gender', headerName: 'Gender', width: 150},
        { field: 'designation', headerName: 'Designation', width: 150},
        { field: 'salary', headerName: 'Salary', width: 150},
        { field: 'contact', headerName: 'Contact', width: 150},
        { field: 'address', headerName: 'Address', width: 150},
        { field: 'Shift', headerName: 'Shift', width: 150}
      ];
    
      return (
        <div style={tableContainerStyle}>
          {/* <DataGrid rows={data} columns={columns} pageSize={5} pagination style={tableStyle} /> */}
          <DataGrid rows={data} columns={columns} initialState={{...data.initialState, pagination :{paginationModel :{pageSize :10}},}} pageSizeOptions={[5,10,25]} />

        </div>
      );
}

export default Table;