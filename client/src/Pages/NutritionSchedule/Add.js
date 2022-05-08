import React, { useState } from 'react';
import { Link } from 'react-router-dom'

import { addNutritionScheduleService } from '../../Services/NutritionScheduleServices';


const Add = () => {
    const [name, setName] = useState("")
    const [weight, setWeight] = useState("")
    const [gender, setGender] = useState("")
    const [members, setMembers] = useState(0)

    const onSubmit = () => {
        const payload = {
            name,
            weight,
            gender,
            members
        }

        addNutritionScheduleService(payload).then((res) => {
            if (res.ok) {
                alert("Successfully added nutrition schedule!")
                window.location.reload()
            } else {
                alert("oops! error occured...")
            }
        }).catch((err) => {
            alert("oops! error occured...")
            console.error("err!", err.message)
        })
    }

    return (
        <div className="panel page">
            <header className="panel-heading">
                <div className='row p-2'>
                    <div className='col-6'>
                        <h3 className="panel-title">Add Nutrition Schedule</h3>

                    </div>
                    <div className='col-6 text-right'>
                        <Link
                            // to="/StaffMembers/View"
                            to="/NutritionSchedule/ViewAll"
                            className='btn btn-primary' >
                            Nutrition Schedule
                        </Link>
                    </div>
                </div>
            </header>
            <div className="panel-body container-fluid">
                <div className="example col-8">
                    <form>
                        <div className="form-group row">
                            <label className="col-md-3 col-form-label">Name: </label>
                            <div className="col-md-9">
                                <input type="text" className="form-control" name="name" autoComplete="off" value={name} onChange={(e) => setName(e.target.value)} required/>
                            </div>
   
                        </div>
                        <div className="form-group row">
                            <label className="col-md-3 col-form-label">Weight: </label>
                            <div className="col-md-9">
                                <select className="form-control" name="weight" value={weight} onChange={(e) => setWeight(e.target.value)} >
                                    <option selected>Select Weight</option>
                                    <option value="20-40Kg">20-40Kg</option>
                                    <option value="40-50Kg">40-50Kg</option>
                                    <option value="50-70Kg">50-70Kg</option>
                                    <option value="70-90Kg">70-90Kg</option>
                                    <option value="90-120Kg">90-120Kg</option>
                                    <option value="Up 120Kg">Up 120Kg</option>
                                    
                                </select>
                    
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-md-3 col-form-label">Gender: </label>
                            <div className="col-md-9">
                                <select className="form-control" name="gender" value={gender} onChange={(e) => setGender(e.target.value)} >
                                    <option selected>Select Gender</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-md-3 col-form-label">Days: </label>
                            <div className="col-md-9">
                                <input type="number" className="form-control" name="members" autoComplete="off" value={members} onChange={(e) => setMembers(e.target.value)} required/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="col-md-9">
                                <button type="reset" className="btn btn-danger">Clear</button>
                                <button type="button" className="btn btn-primary mr-1" onClick={() => { onSubmit() }}>Add</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Add
