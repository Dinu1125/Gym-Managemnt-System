import React, {useState} from "react";

const AddShopItem = () => {

    const [shopItem, setShopItem] = useState({
        name: "",
        price: "",
        description: "",
        image: "",
    });

    const onChange = e => setShopItem({...shopItem, [e.target.name]: e.target.value});

    return (
        <div className="panel page">
            <header className="panel-heading">
                <div className='col-6'>
                    <h3 className="panel-title">Add Shop Itm</h3>
                </div>
            </header>
            <div className="panel-body container-fluid">
                <div className="example col-8">
                    <form>
                        <div className="form-group row">
                            <label className="col-md-3 col-form-label">Name: </label>
                            <div className="col-md-9">
                                <input
                                    type="text"
                                    className="form-control"
                                    name="name"
                                    autoComplete="off"
                                    onChange={onChange}
                                />
                            </div>
                        </div>
                        <div className="form-group row">
                            <legend className="col-md-3 col-form-legend">Description:</legend>
                            <div className="col-md-9">
                                <textarea
                                    className="form-control"
                                    name="description"
                                    rows="5"
                                    autoComplete="off"
                                    onChange={onChange}
                                />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-md-3 col-form-label">Price: </label>
                            <div className="col-md-9">
                                <div className="input-group">
                                    <span className="input-group-addon">Rs.</span>
                                    <input
                                        type="number"
                                        className="form-control"
                                        placeholder=""
                                        name="price"
                                        onChange={onChange}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-md-3 col-form-label">Image: </label>
                            <div className="col-md-9">
                                <input
                                    type="file"
                                    className="form-control"
                                    name="image"
                                    autoComplete="off"
                                    onChange={onChange}
                                />
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="col-md-9">
                                <button type="button" className="btn btn-primary mr-1">Save Item</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AddShopItem;