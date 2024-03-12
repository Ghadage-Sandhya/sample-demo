// // import React from "react";

// // class ClassComp extends React.Component{

// //     render(){

// //         const {data}=this.props;

// //         return (
// //             <>
// //                {/* <h1>My name is {this.props.data.name}</h1>
// //                <p>City is {this.props.data.loc.city}</p>
// //                <h2>Pincode is {this.props.data.loc.pincode}</h2> */}

// //                <h1>My name is {data.name}</h1>
// //                <h2>City name is {data.loc.city}</h2>
// //                <h3>Pincode is {data.loc.pincode}</h3>

// //             </>
// //         )
// //     }
// // }

// // export default ClassComp

// import React from "react";

// class ClassComp extends React.Component {

//   state = {
//     age: 21,
//     name: "Lilly",
//     firstName: "Elon",
//     lastName: "Musk",
//     address: {
//       id: 1,
//       country: "UK",
//     },
//   };

// //   handleClick() {
// //     this.setState({
// //       age: 413,
// //       address: {
// //         country: "India" + " ",
// //       },
// //     });
// //   }

//   render() {
//     const {age,name,firstName,lastName,...rest}=this.state;
//     return (
//       <>
//         {/* <h1>Name is {[this.state.address.country, " ", this.state.age]}</h1>
//         <button onClick={() => this.handleClick()}>Click</button> */}

//         <h1>Age is {age}</h1>

//         <h2>Name is {name}</h2>

//         <h3>FirstName is {firstName}</h3>

//         <h4>LastName is {lastName}</h4>

//         <h5>Id is {rest.address.id}</h5>

//         <h6>Country is {rest.address.country}</h6>

//       </>
//     );
//   }
// }

// export default ClassComp;



import React from "react";

class ClassComp extends React.Component{
    constructor (){
        super();
        this.user="Kajal"

        this.handleClick=this.handleClick.bind(this);

        this.state={
            user:"Kajal"
        }
    }

    handleChange(){
        this.user="Pooja"
        console.log(this.user)
    }

    handleClick(){
        this.setState({
            user:"Pooja"
        },
        ()=>console.log(this.state.user))
        
    }

    render(){
        return(
            <>
                <h1>User name {this.user}</h1>
                <button onClick={this.handleChange.bind(this)}>Click to change</button>

                <h1>UserName is {this.state.user}</h1>
                <button onClick={this.handleClick}>Click</button>
            </>
        )
    }
}

export default ClassComp

