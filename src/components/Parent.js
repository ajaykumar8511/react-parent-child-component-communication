import React, { Component } from 'react';
import Child from './Child';


let tmp = "";
let index2 = "";




class Parent extends Component {
    constructor(props) {
        super(props);
        this.state = { users: [] };
    }

    componentDidMount() {
        this.setState({
            users: this.userList()
        });
    }

    deleteUser = (id) => {
        this.setState({
            users: this.state.users.filter((item) => item.id !== id)
        });
    }

    
    onUPSwipe = (index1) => {
        console.log("index1", index1)
         var arr = this.state.users;
        index2 = index1--;
    
        tmp = arr[index1];
        arr[index1] = arr[index2];
        arr[index2] = tmp;

        this.setState({
            users: arr
        });
    };

    onDownSwipe = (index1) => {
         var arr = this.state.users;
        index2 = index1++ ;
    
        tmp = arr[index1];
        arr[index1] = arr[index2];
        arr[index2] = tmp;
        
        this.setState({
            users: arr
        });
    };



    userList = () => {
        const user = [
            { id: 1, name: "Ajay", age: 22, location: "Palanpur" },
            { id: 2, name: "Bhavesh", age: 22, location: "Ahmedabad" },
            { id: 3, name: "Harsh", age: 19, location: "Palanpur" },
            { id: 4, name: "Karan", age: 18, location: "Deesa" },
            { id: 5, name: "Kishan", age: 22, location: "Delhi" },
            { id: 6, name: "Vikky", age: 26, location: "Ahmedabad" },
            { id: 7, name: "Anjali", age: 19, location: "Bhuj" },
            { id: 8, name: "Shilpa", age: 20, location: "Vadodara" },
            { id: 9, name: "Kiran", age: 32, location: "Mumbai" },
            { id: 10, name: "Rohit", age: 23, location: "Delhi" },
            { id: 11, name: "Jayesh", age: 19, location: "Maahi" },
            { id: 12, name: "Ajay", age: 20, location: "Maahi" },
            { id: 13, name: "Bharat", age: 22, location: "Kadi" },
            { id: 14, name: "Pulkit", age: 18, location: "Gola" },
            { id: 15, name: "Kishan", age: 22, location: "Himmatnagar" },
            { id: 16, name: "Vikky", age: 26, location: "Chhapi" },
            { id: 17, name: "Raj", age: 19, location: "Dhanali" },
            { id: 18, name: "Jignesh", age: 22, location: "Moriya" },
            { id: 19, name: "Maahi", age: 32, location: "Diu" },
            { id: 20, name: "Rohan", age: 23, location: "Delhi" },
        ]
        return user;
    }

    render() {
        return (

            <div>
                <Child user={this.state.users} onDelete={this.deleteUser} onUPSwipe={this.onUPSwipe} onDownSwipe={this.onDownSwipe}></Child>
            </div>

        )
    }
}

// appendUser = (item) => {
//     this.setState({
//         users: [...this.state.users,item]
//     });
// }

{/* <Child user={this.state.users} onDelete={this.deleteUser} onAdd={this.appendUser} ></Child> */ }

// const myArray = ["One", "Two", "Three", "Four"];

// const SwipePosition = (arr, index1) => {
//     index2 = index1++

//     tmp = arr[index1];
//     arr[index1] = arr[index2];
//     arr[index2] = tmp;
//     return arr;
// };

// let i1 = 1
// let result = SwipePosition(myArray, i1);
// console.log(result);

export default Parent;