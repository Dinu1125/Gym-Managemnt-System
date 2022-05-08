import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router";

export default function Add() {

  const [records, setRecords] = useState([]);

  const Record = (props) => (
    <tr>
      <td>{props.record.membername}</td>
      <td>{props.record.workoutplan}</td>
      <td>
      <Link className="btn btn-icon btn-primary ml-1" to={`/Workout/Assign/Edit/${props.record._id}`}><i class="icon wb-pencil" aria-hidden="true"></i></Link>
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

  useEffect(() => {
    async function getRecords() {
      const response = await fetch(`http://localhost:4000/workoutassign/all`);

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

  async function deleteRecord(id) {
    await fetch(`http://localhost:4000/workoutassign/delete/${id}`, {
      method: "DELETE"
    });

    const newRecords = records.filter((el) => el._id !== id);
    setRecords(newRecords);
  }

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

  const [form, setForm] = useState({
    membername:"",
    workoutplan:"",
});

const navigate = useNavigate();

 // These methods will update the state properties.
 function updateForm(value) {
  return setForm((prev) => {
    return { ...prev, ...value };
  });
}

  // This function will handle the submission.
  async function onSubmit(e) {
    e.preventDefault();

    // When a post request is sent to the create url, we'll add a new record to the database.
    const newWork = { ...form };

    

  await fetch("http://localhost:4000/workoutassign/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newWork),
    })
    .catch(error => {
      window.alert(error);
      return;
    });

    setForm({ membername: "", workoutplan: "" });

  }

    return (
       <div className="panel page">
            <header className="panel-heading">
          <div className='row p-2'>
            <div className='col-6'>
              <h3 className="panel-title">Assign Workout</h3>
            </div>
            <div className='col-6 text-right'>
            </div>
          </div>
        </header>
            <div className="panel-body container-fluid">
                <div className="example col-12">
                    <form onSubmit={onSubmit} >
                            <div className="form-group row">
                                <label className="col-md-3 col-form-label">Member Name: </label>
                                <div className="col-md-6">
                                    <select className="form-control" id='membername' name='membername'
                                            onChange={(e) => updateForm({ membername: e.target.value })}>
                                            <option selected value="Member1">Member 1</option>
                                            <option value="Member2">Member 2</option>
                                            <option value="Member3">Member 3</option>
                                      </select>
                                  </div>
                            </div>
                           
                            <div className="form-group row">
                                <label className="col-md-3 col-form-label">Workout Name: </label>
                                        <div className="col-md-6">
                                          <select className="form-control" id='workoutplan' name='workoutplan'
                                            onChange={(e) => updateForm({ workoutplan: e.target.value })}>
                                            <option selected value="Workout1">Workout 1</option>
                                            <option value="Workout2">Workout 2</option>
                                            <option value="Workout3">Workout 3</option>
                                          </select>
                                </div>
                            </div>

                            <div className="form-group row text-right">
                                    <div className="col-md-12">
                                    <button type="submit" className="btn btn-primary mr-1">Assign Workout</button>
                                    <Link to = "#" className="btn btn-danger">Clear</Link>
                                    </div>
                            </div>
                    </form>
                    <div className="form-group row">
                          <label className="col-md-3 col-form-label">Details: </label>
                                <table className="table table-striped" style={{ marginTop: 20 }}>
                                    <thead>
                                      <tr>
                                        <th>Member Name</th>
                                        <th>Workout Name</th>
                                        <th>Manage</th>
                                      </tr>
                                    </thead>
                                    <tbody>{recordList()}</tbody>
                          </table>
                      </div>
                </div>
            </div>
        </div>
    )
}

