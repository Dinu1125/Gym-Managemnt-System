/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class SideBar extends Component {
  render() {
    return (
      <div className="site-menubar">
        <div className="site-menubar text-left">
          <div className='divhover mw-100 p-20 mt-10'>
            <a className='h4 p-20 mw-100'>Dashboard</a>
          </div>
          <Link to="#" >
            <div className='divhover mw-100  p-20 '>
              <a className='h4 p-20 mw-100'>Member Management</a>
            </div>
          </Link>
          <Link to="/NutritionSchedule/ViewAll" >
            <div className='divhover mw-100  p-20 '>
              <a className='h4 p-20 mw-100'>Nutrition Schedule</a>
            </div>
          </Link>
          <Link to="/ClassSchedule/ViewAll" >
            <div className='divhover mw-100  p-20 '>
              <a className='h4 p-20 mw-100'>Class Schedule</a>
            </div>
          </Link>
          <div className='divhover mw-100 p-20'>
            <a className='h4 p-20 mw-100'>Workout</a>
          </div>
          <div className='divhover mw-100  p-20'>
            <a className='h4 p-20 mw-100'>Shop</a>
          </div>
        </div>
      </div>
    )
  }
}
