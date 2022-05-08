import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { getAllClassScheduleRecodsService, deleteClassScheduleRecodService } from '../../Services/ClassScheduleServices'

const ViewAll = () => {

    let navigate = useNavigate();
    const [allRecords, setAllRecords] = useState([])

    useEffect(() => {
        retrieveRecords()
    }, [])

    const retrieveRecords = () => {
        getAllClassScheduleRecodsService().then((res) => {
            console.log('info',res);
            setAllRecords(res?.data)
        }).catch((err) => {
            console.log("error while retrieving data")
        })
    }

    const deleteClassSchedule = (id) => {
        console.log('INNNNN');
        deleteClassScheduleRecodService(id).then((res) => {
            alert('Successfully deleted !')
            console.log('deleted');
            retrieveRecords()
        }).catch((err) => {
            console.log("error while deleting data")
        })
    }

    return (
        <div className="panel">
            <header className="panel-heading">
                <div className='row p-2'>
                    <div className='col-6'>
                        <h3 className="panel-title">Class Schedule</h3>
                    </div>
                    <div className='col-6 text-right'>
                        <Link to="#" className='btn btn-secondary mr-5' >
                            Print Class Schedule
                        </Link>

                        <Link to="/ClassSchedule/Add" className='btn btn-primary' >
                            Add Class Schedule
                        </Link>
                    </div>
                </div>
            </header>
            <div className="panel-body">

                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th className='text-center' scope="col">Class Name</th>
                            <th className='text-center' scope="col">Staff Name</th>
                            <th className='text-center' scope="col">Time</th>
                            <th className='text-center' scope="col">Location</th>
                            <th className='text-center' scope="col">Fee</th>
                            <th className='text-center' scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allRecords.map((record) => {
                            return (
                                <tr key={record._id}>
                                    <td className='text-center'>{record.className}</td>
                                    <td className='text-center'>{record.staffName}</td>
                                    <td className='text-center'>{record.startTime} - {record.endTime}</td>
                                    <td className='text-center'>{record.location}</td>
                                    <td className='text-center'>{record.fee}</td>
                                    <td className='text-center'>
                                        <button class="btn btn-primary rounded-circle mr-3 " onClick={() => { navigate("/ClassSchedule/Edit", { state: { record } }) }}><i class="fa  fa-pencil "></i></button>
                                        <button class="btn btn-danger rounded-circle" onClick={() => deleteClassSchedule(record._id)}><i class="fa  fa-trash"></i></button>
                                    </td>
                                </tr>
                            )
                        })}
                        {/* <tr>
                            <td className='text-center'>1</td>
                            <td className='text-center'>Mark</td>
                            <td className='text-center'>Otto</td>
                            <td className='text-center'>@mdo</td>
                            <td className='text-center'>@mdo</td>
                            <td className='text-center'>
                                <button class="btn btn-primary rounded-circle mr-3 "><i class="fa  fa-pencil "></i></button>
                                <button class="btn btn-danger rounded-circle"><i class="fa  fa-trash"></i></button>
                            </td>
                        </tr> */}
                    </tbody>
                </table>

            </div>
        </div>
    )
}

export default ViewAll