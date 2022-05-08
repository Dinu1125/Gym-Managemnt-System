/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useEffect, useState }  from 'react'
import { Link } from 'react-router-dom'

export default function Viewall() {

  const [records, setRecords] = useState([]);

  const Record = (props) => (
    <tr>
      <td>{props.record.fullName}</td>
      <td>{props.record.memberid}</td>
      <td>{props.record.birthDay}</td>
      <td>{props.record.email}</td>
      <td>
      <Link className="btn btn-icon btn-primary" to={`/GymMembers/One/${props.record._id}`}><i class="icon wb-eye" aria-hidden="true"></i></Link>
      <Link className="btn btn-icon btn-primary ml-1" to={`/GymMembers/Edit/${props.record._id}`}><i class="icon wb-pencil" aria-hidden="true"></i></Link>
        <button className="btn btn-icon btn-danger ml-1"
          onClick={() => {
            props.deleteRecord(props.record._id);
          }}
        >
        <i class="icon wb-trash" aria-hidden="true"></i>
        </button>
      </td>
    </tr>
  );

    // This method fetches the records from the database.
    useEffect(() => {
      async function getRecords() {
        const response = await fetch(`http://localhost:4000/gymmember/all`);
  
        if (!response.ok) {
          const message = `An error occured: ${response.statusText}`;
          window.alert(message);
          return;
        }
  
        const records = await response.json();
        setRecords(records);
      }
  
      getRecords();
  
      return; 
    }, [records.length]);


     // This method will delete a record
  async function deleteRecord(id) {
    await fetch(`http://localhost:4000/gymmember/delete/${id}`, {
      method: "DELETE"
    });

    const newRecords = records.filter((el) => el._id !== id);
    setRecords(newRecords);
  }

    // This method will map out the records on the table
  function recordList() {
    return records.map((record) => {
      return (
        <Record
          record={record}
          deleteRecord={() => deleteRecord(record._id)}
          key={record._id}
        />
      );
    });
  }
    return (
    <div className="panel">
        <header className="panel-heading">
          <div className='row p-2'>
            <div className='col-6'>
              <h3 className="panel-title">Member List</h3>
            </div>
            <div className='col-6 text-right'>
              <Link to = "/GymMembers/Add" className='btn btn-primary' >
             + Add Member
              </Link>
            </div>
          </div>
        </header>
        <div className="panel-body">
        <table className="table table-striped" style={{ marginTop: 20 }}>
          <thead>
            <tr>
              <th>Staff Member Name</th>
              <th>Member Id</th>
              <th>Joined Date</th>
              <th>Member Email</th>
              <th>Action</th>
            </tr>
          </thead>
        <tbody>{recordList()}</tbody>
        </table>
        </div>
        <div className='col-12 text-right'>
              <Link to = "#" className='btn btn-primary' >
               Generate Report
              </Link>
        </div>
    </div>
    
    )
}
