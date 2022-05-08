import React, {  } from 'react'
import { Link } from 'react-router-dom'

export default function MemberManagement() {


    return (
       <div className="panel page">
            <div className="panel-body container-fluid">
                <div className="example col-12 text-center">
                <Link to = "/StaffMembers/View" className='btn btn-primary' >
                 Staff Members
                </Link>
                </div>
                <div className="example col-12 text-center">
                <Link to = "/GymMembers/View" className='btn btn-primary' >
                Members
                </Link>
                </div>
            </div>
        </div>
    )
}

