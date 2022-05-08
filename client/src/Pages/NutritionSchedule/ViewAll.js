import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { getAllNutritionScheduleRecodsService, deleteNutritionScheduleRecodService } from '../../Services/NutritionScheduleServices'

const ViewAll = () => {

    let navigate = useNavigate();
    const [allRecords, setAllRecords] = useState([])

    useEffect(() => {
        retrieveRecords()
    }, [])

    const retrieveRecords = () => {
        getAllNutritionScheduleRecodsService().then((res) => {
            console.log('info',res);
            setAllRecords(res?.data)
        }).catch((err) => {
            console.log("error while retrieving data")
        })
    }

    const deleteNutritionSchedule = (id) => {
        console.log('INNNNN');
        deleteNutritionScheduleRecodService(id).then((res) => {
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
                        <h3 className="panel-title">Nutrition Schedule</h3>
                    </div>
                    <div className='col-6 text-right'>
                        <Link to="#" className='btn btn-secondary mr-5' >
                            Print Nutrition Schedule
                        </Link>

                        <Link to="/NutritionSchedule/Add" className='btn btn-primary' >
                            Add Nutrition Schedule
                        </Link>
                    </div>
                </div>
            </header>
            <div className="panel-body">

                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th className='text-center' scope="col">Name</th>
                            <th className='text-center' scope="col">Weight</th>
                            <th className='text-center' scope="col">Gender</th>
                            <th className='text-center' scope="col">Days</th>
                            <th className='text-center' scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allRecords.map((record) => {
                            return (
                                <tr key={record._id}>
                                    <td className='text-center'>{record.name}</td>
                                    <td className='text-center'>{record.weight}</td>
                                    <td className='text-center'>{record.gender}</td>
                                    <td className='text-center'>{record.members}</td>
                                    <td className='text-center'>
                                        <button class="btn btn-primary rounded-circle mr-3 " onClick={() => { navigate("/NutritionSchedule/Edit", { state: { record } }) }}><i class="fa  fa-pencil "></i></button>
                                        <button class="btn btn-danger rounded-circle" onClick={() => deleteNutritionSchedule(record._id)}><i class="fa  fa-trash"></i></button>
                                    </td>
                                </tr>
                            )
                        })}
                        
                    </tbody>
                </table>

            </div>
        </div>
    )
}

export default ViewAll