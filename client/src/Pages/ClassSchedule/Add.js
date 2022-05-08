import React, { useState } from 'react';
import TimePicker from 'react-time-picker';
import { Link } from 'react-router-dom'

import { addClassScheduleService } from '../../Services/ClassScheduleServices';


const Add = () => {
    const [className, setClassName] = useState("")
    const [staffName, setStaffname] = useState("")
    const [location, setLocation] = useState("")
    const [fee, setFee] = useState(0)
    const [startTime, onChangeStartTime] = useState('00:00');
    const [endTime, onChangeEndTime] = useState('00:00');

    const onSubmit = () => {
        const payload = {
            className,
            staffName,
            location,
            fee,
            startTime,
            endTime
        }

        addClassScheduleService(payload).then((res) => {
            if (res.ok) {
                alert("Successfully added class schedule!")
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
                        <h3 className="panel-title">Add Class Schedule</h3>

                    </div>
                    <div className='col-6 text-right'>
                        <Link
                            // to="/StaffMembers/View"
                            to="/ClassSchedule/ViewAll"
                            className='btn btn-primary' >
                            Class Schedule
                        </Link>
                    </div>
                </div>
            </header>
            <div className="panel-body container-fluid">
                <div className="example col-8">
                    <form>
                        <div className="form-group row">
                            <label className="col-md-3 col-form-label">Class Name: </label>
                            <div className="col-md-9">
                                <input type="text" className="form-control" name="className" autoComplete="off" value={className} onChange={(e) => setClassName(e.target.value)} required/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-md-3 col-form-label">Staff Name: </label>
                            <div className="col-md-9">
                            
                                <select className="form-control" name="staffName" value={staffName} onChange={(e) => setStaffname(e.target.value)} >
                                    <option selected>Select Staff Member</option>
                                    <option value="Perera K.T">Perera K.T</option>
                                    <option value="De Silva D.N">De Silva D.N</option>
                                    <option value="Thilina R.M.S">Thilina R.M.S</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-md-3 col-form-label">Location: </label>
                            <div className="col-md-9">
                                <select className="form-control" name="Location" value={location} onChange={(e) => setLocation(e.target.value)} >
                                    <option selected>Select Hall</option>
                                    <option value="H01">H01</option>
                                    <option value="H02">H02</option>
                                    <option value="H03">H03</option>
                                    <option value="H04">H04</option>
                                    <option value="H05">H05</option>
                                    <option value="H06">H06</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-md-3 col-form-label">Fee(Rs): </label>
                            <div className="col-md-9">
                                <input type="number" className="form-control" name="fee" autoComplete="off" value={fee} onChange={(e) => setFee(e.target.value)} required/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-md-3 col-form-label">Start Time: </label>
                            <div className="col-md-9">
                                <div class="input-group input-group-icon">
                                    <TimePicker onChange={onChangeStartTime} value={startTime} />
                                </div>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-md-3 col-form-label">End Time: </label>
                            <div className="col-md-9">
                                <div class="input-group input-group-icon">
                                    <TimePicker onChange={onChangeEndTime} value={endTime} />
                                </div>
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="col-md-9">
                                <button type="reset"  className="btn btn-danger">Clear</button>
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
