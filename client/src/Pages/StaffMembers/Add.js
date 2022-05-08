/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router";
import axios from 'axios';

export default function Add (){


  const [img, setImg] = useState();

  const [form, setForm] = useState({
        fullName:"",
        gender:"",
        birthDay:"",
        roleid:"",
        address:"",
        mobile:"",
        email:"",
        image:""
  });

  const navigate = useNavigate();
 
 // These methods will update the state properties.
 function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }

  function fileselect(event){
    const [file] = event.target.files;
    setImg(URL.createObjectURL(file));
    const formData = new FormData()
    formData.append('profileImg', event.target.files[0]);
    axios.post("http://localhost:4000/file/uplaod",formData, {
    }).then(res => {
        console.log(res.data);
        form.image=res.data;
    })
  }

  
  async function onSubmit(e) {
    e.preventDefault();
    // When a post request is sent to the create url, we'll add a new record to the database.
    const newMember = { ...form };

    await fetch("http://localhost:4000/member/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newMember),
    })
    .catch(error => {
      window.alert(error);
      return;
    });

    navigate("/StaffMembers/View");
  }

    return (
       <div className="panel page">
            <header className="panel-heading">
          <div className='row p-2'>
            <div className='col-6'>
              <h3 className="panel-title">Add Staff Member</h3>
           
            </div>
            <div className='col-6 text-right'>
              <Link to = "/StaffMembers/View" className='btn btn-primary' >
                Staff Member List
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
                            <div className="form-group row">
                                <label className="col-md-3 col-form-label">Assign Role: </label>
                                <div className="col-md-6">
                                <select className="form-control" id='roleid' name='roleid'
                                     onChange={(e) => updateForm({ roleid: e.target.value })}
                                >
                                    <option selected value="Role1">Role 1</option>
                                    <option value="Role2">Role 2</option>
                                    <option value="Role3">Role 3</option>
                                </select>
                                </div>
                                <div className="col-md-3">
                                  <Link to = "#" className='btn btn-primary' >
                                    Add Role
                                  </Link>
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
                            <div className="form-group row">
                                    <label className="col-md-3 col-form-label">Profile Image: </label>
                                    <div className="col-md-9">
                                    <input type="file"  onChange={(e) =>fileselect(e)} className="form-control" name="name" autoComplete="off" />
                                    <img src={img} className="w-60"></img>
                            </div>
                            </div>
                            <div className="form-group row">
                                    <div className="col-md-9">
                                    <button type="submit" className="btn btn-primary mr-1">Save Staff</button>
                                    <button type="reset" className="btn btn-danger">Clear</button>
                              </div>
                            </div>
                    </form>
                </div>
            </div>
        </div>
    )
  
}

