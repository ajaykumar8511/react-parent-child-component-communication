import React, { Component } from 'react';

import '../css/Child.css';

class Child extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    onDelete = (id) => {
        this.props.onDelete(id)
    }

    onUPSwipe = (index) => {
        this.props.onUPSwipe(index)
    }
    onDownSwipe = (index) => {
        this.props.onDownSwipe(index)
    }



    render() {
        const { user } = this.props;
        console.log(user)

        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-sm">
                        </div>
                        <div className="col-8">
                            <br />
                            <div className="card card-table">
                                <table className="table">
                                    <thead className="table-info table-header">
                                        <tr>
                                            <th scope="col">ID</th>
                                            <th scope="col"> Name</th>
                                            <th scope="col">Age</th>
                                            <th scope="col">City</th>
                                            <th scope="col">Operation</th>
                                        </tr>

                                    </thead>
                                    <tbody className="table-body">
                                        {user.map((item, index) => (
                                            <tr key={index}  >
                                                    <td>{item.id}</td>
                                                    <td>{item.name}</td>
                                                    <td>{item.age}</td>
                                                    <td>{item.location}</td>
                                                    <td key={"bt"}>
                                                        <button type="button" className="btn btn-dark swipe up-btn" onClick={() => this.onUPSwipe(index)} > ▲ </button>
                                                        <button type="button" className="btn btn-dark swipe down-btn" onClick={() => this.onDownSwipe(index)} > ▼ </button>
                                                        <button type="button" className="btn btn-danger delete-btn" onClick={() => this.onDelete(item.id)} >✗ Delete </button>
                                                    </td>
                                            </tr>
                                        ))}

                                    </tbody>
                                </table>

                            </div>
                        </div>
                        <div className="col-sm">
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

// onAdd = (item) => {
//     const itemTest = { id: 55, name: "Ajay", age: 22, location: "Palanpur" }
//     this.props.onAdd(itemTest)
// }

{/* <button type="button" className="btn btn-danger delete-btn" onClick={() => this.onAdd({})} > Add </button> */ }

export default Child;