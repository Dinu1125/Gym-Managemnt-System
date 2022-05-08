/* eslint-disable jsx-a11y/alt-text */

import { Link } from 'react-router-dom'
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";

export default function Add (){

    const [form, setForm] = useState({
      memberid:"",
      fullName:"",
      gender:"",
      birthDay:"",

      address:"",
      mobile:"",
      email:"",

      weight:"",
      height:"",
  
      staffmember:"",
      class:"",

    });

    const params = useParams();
    const navigate = useNavigate();

    

    useEffect(() => {
      async function fetchData() {
        const id = params.id.toString();
        const response = await fetch(`http://localhost:4000/gymmember/${params.id.toString()}`);
  
        if (!response.ok) {
          const message = `An error has occured: ${response.statusText}`;
          window.alert(message);
          return;
        }
  
        const record = await response.json();
        if (!record) {
          window.alert(`Record with id ${id} not found`);
          navigate("/StaffMembers/View");
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
    const editedMember = { ...form };

    // This will send a post request to update the data in the database.
    await fetch(`http://localhost:4000/gymmember/update/${params.id}`, {
      method: "POST",
      body: JSON.stringify(editedMember),
      headers: {
        'Content-Type': 'application/json'
      },
    });

    navigate("/GymMembers/View");
  }


    return (
       <div className="panel page">
            <header className="panel-heading">
          <div className='row p-2'>
            <div className='col-6'>
              <h3 className="panel-title">Update Member</h3>
           
            </div>
            <div className='col-6 text-right'>
              <Link to = "/GymMembers/View" className='btn btn-primary' >
                Member List
              </Link>
            </div>
          </div>
        </header>
            <div className="panel-body container-fluid">
                <div className="example col-8">
                    <form onSubmit={onSubmit} enctype="multipart/form-data">
                        <h4 className="example-title mb-4">Personal Information</h4>
                        <hr/>
                        <div className="form-group row">
                                <label className="col-md-3 col-form-label">Member Id: </label>
                                <div className="col-md-9">
                                <input type="text" className="form-control" id="memberid" autoComplete="off" 
                                    value={form.memberid}
                                    onChange={(e) => updateForm({ memberid: e.target.value })}
                                />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-md-3 col-form-label">Full Name: </label>
                                <div className="col-md-9">
                                <input type="text" className="form-control" id="fullName" autoComplete="off" 
                                    value={form.fullName}
                                    onChange={(e) => updateForm({ fullName: e.target.value })}
                                />
                                </div>
                            </div>
                            <div className="form-group row">
                                <legend className="col-md-3 col-form-legend">Gender: </legend>
                                <div className="col-md-9">
                                <div className="radio-custom radio-default radio-inline">
                                    <input type="radio" id="gender"  name="gender"
                                    value="Male"
                                    onChange={(e) => updateForm({ gender: e.target.value })}
                                    />
                                    <label htmlFor="inputHorizontalMale">Male</label>
                                </div>
                                <div className="radio-custom radio-default radio-inline">
                                    <input type="radio" id="gender" name="gender"
                                     value="Female"
                                     onChange={(e) => updateForm({ gender: e.target.value })}
                                    />
                                    <label htmlFor="inputHorizontalFemale">Female</label>
                                </div>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-md-3 col-form-label">Date Of Birth: </label>
                                <div className="col-md-9">
                                <div class="input-group input-group-icon">
                                <input type="date" className="form-control" id="birthDay" name='birthDay'
                                    value={form.birthDay}
                                    onChange={(e) => updateForm({ birthDay: e.target.value })} 
                                />
                                    <span class="input-group-addon">
                                    <span class="icon wb-calendar" aria-hidden="true"></span>
                                    </span>
                                </div>
                                </div>
                            </div>
                        <h4 className="example-title mb-4">Contact Information</h4>
                        <hr/>
                            <div className="form-group row">
                                    <label className="col-md-3 col-form-label">Home Town Address: </label>
                                    <div className="col-md-9">
                                    <input type="text" className="form-control" name="address" id='address' autoComplete="off"
                                         value={form.address}
                                         onChange={(e) => updateForm({ address: e.target.value })}
                                    />
                                    </div>
                            </div>
                            <div className="form-group row">
                                    <label className="col-md-3 col-form-label">Mobile Number: </label>
                                    <div className="col-md-9">
                                    <div className="input-group">
                                        <span className="input-group-addon">+94</span>
                                        <input type="number" className="form-control" placeholder="" id='mobile' name='mobile'
                                            value={form.mobile}
                                            onChange={(e) => updateForm({ mobile: e.target.value })}
                                        />
                                    </div>
                                    </div>
                            </div>
                            <div className="form-group row">
                                    <label className="col-md-3 col-form-label">Email Address: </label>
                                    <div className="col-md-9">
                                    <input type="email" className="form-control" name="email" id='email' autoComplete="off"
                                         value={form.email}
                                         onChange={(e) => updateForm({ email: e.target.value })}
                                    />
                                    </div>
                            </div>

                            <h4 className="example-title mb-4">PhySical Information</h4>
                              <hr/>
                                  <div className="form-group row">
                                          <label className="col-md-3 col-form-label">Weight: </label>
                                          <div className="col-md-9">
                                          <input type="number" className="form-control" name="weight" id='weight' autoComplete="off"
                                              value={form.weight}
                                              onChange={(e) => updateForm({ weight: e.target.value })}
                                          />
                                          </div>
                                  </div>

                                  <div className="form-group row">
                                          <label className="col-md-3 col-form-label">Height: </label>
                                          <div className="col-md-9">
                                          <input type="number" className="form-control" name="height" id='height' autoComplete="off"
                                              value={form.height}
                                              onChange={(e) => updateForm({ height: e.target.value })}
                                          />
                                          </div>
                                  </div>

                              <h4 className="example-title mb-4">More Information</h4>
                              <hr/>
                                  <div className="form-group row">
                                  <label className="col-md-3 col-form-label"> Select Staff Member: </label>
                                          <div className="col-md-6">
                                          <select className="form-control" id='staffmember' name='staffmember'
                                            onChange={(e) => updateForm({ staffmember: e.target.value })}>
                                            <option selected value="Member1">Member 1</option>
                                            <option value="Member2">Member 2</option>
                                            <option value="Member3">member 3</option>
                                          </select>
                                          </div>
                                          <div className="col-md-3">
                                          <Link to = "/StaffMembers/Add" className='btn btn-primary' >
                                            Add Staff
                                          </Link>
                                          </div>
                                  </div>

                                  <div className="form-group row">
                                  <label className="col-md-3 col-form-label">Class: </label>
                                          <div className="col-md-6">
                                          <select className="form-control" id='class' name='class'
                                            onChange={(e) => updateForm({ class: e.target.value })}>
                                            <option selected value="Class1">Class 1</option>
                                            <option value="Class2">Class 2</option>
                                            <option value="Class3">Class 3</option>
                                          </select>
                                          </div>
                                          <div className="col-md-3">
                                          <Link to = "#" className='btn btn-primary' >
                                            Add Class
                                          </Link>
                                          </div>
                                  </div>
                          
                            <div className="form-group row">
                                    <div className="col-md-9">
                                    <button type="submit" className="btn btn-primary mr-1">Update Member</button>
                                    <button type="reset" className="btn btn-danger">Clear</button>
                              </div>
                            </div>
                    </form>
                </div>
            </div>
        </div>
    )
  
}

