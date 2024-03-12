import React from "react";

class ClassComp extends React.Component {
  constructor(params) {
    super();

    this.state = {
      name: "Lilly",
      data: {
        marks: [89, 86, 75, 94],
      },
    };
  }

  
  handleClick(){
    this.setState({
        name:[45,78,96,36]
    })
  }


  render() {
    return (
      <>
        <h1>Name: {this.state.name}</h1>
        <h2>Data: {this.state.data.marks}</h2>
        <button onClick={()=>this.handleClick()}>Click</button>
      </>
    );
  }
}

export default ClassComp;
