import {Link} from "react-router-dom";
import React from "react";
import './ShopList.css';


const ShopList = () => {
    return (
        <div className="panel page">
            <header className="panel-heading">
                <div className='row p-2'>
                    <div className='col-6'>
                        <h3 className="panel-title">Item List</h3>
                    </div>
                    <div className='col-6 text-right'>
                        <Link to="#" className='btn btn-primary'>
                            print Shop Schedule
                        </Link>
                    </div>
                </div>
                <div className='row p-2'>
                    <div className='col-6'></div>
                    <div className='col-6 text-right'>
                        <div className="input-group rounded" style={{position:'relative'}}>
                            <input type="search" className="form-control rounded" placeholder="Search"
                                   aria-label="Search" aria-describedby="search-addon"/>
                            <span className="input-group-text border-0 " id="search-addon" ><i className="fas fa-search search-icon"></i></span>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default ShopList;