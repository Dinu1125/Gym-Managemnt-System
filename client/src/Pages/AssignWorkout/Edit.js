import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useParams, useNavigate } from "react-router";

export default function Add() {

  const [form, setForm] = useState({
    name:"",
    date:"",
    day1:"",
    day2:"",
    day3:"",
    day4:"",
    day5:"",
    day6:"",
    day7:""
});

const params = useParams();
const navigate = useNavigate();

useEffect(() => {
  async function fetchData() {
    const id = params.id.toString();
    const response = await fetch(`http://localhost:4000/workoutassign/${params.id.toString()}`);

    if (!response.ok) {
      const message = `An error has occured: ${response.statusText}`;
      window.alert(message);
      return;
    }

    const record = await response.json();
    if (!record) {
      window.alert(`Record with id ${id} not found`);
      navigate("/Workout/View");
      return;
    }

    setForm(record);
  }

  fetchData();

  return;
}, [params.id, navigate]);

 // These methods will update the state properties.
function updateForm(value) {
return setForm((prev) => {
  return { ...prev, ...value };
});
}

async function onSubmit(e) {
e.preventDefault();
const editedWorkout = { ...form };

// This will send a post request to update the data in the database.
await fetch(`http://localhost:4000/workoutassign/update/${params.id}`, {
  method: "POST",
  body: JSON.stringify(editedWorkout),
  headers: {
    'Content-Type': 'application/json'
  },
});

navigate("/Workout/View");
}

    return (
       <div className="panel page">
            <header className="panel-heading">
          <div className='row p-2'>
            <div className='col-6'>
              <h3 className="panel-title">Change Member Workout Plan</h3>
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
                                    <button type="submit" className="btn btn-primary mr-1">Update</button>
                                    <Link to = "/Workout/View" className="btn btn-danger">Cancel</Link>
                                    </div>
                            </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

