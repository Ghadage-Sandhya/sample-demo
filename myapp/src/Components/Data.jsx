import React from "react"
class ClassComp extends React.Component{
   render(){
      const {color,fontSize,border,paddingTop}=this.props.style.inner;
      return (
         <>
            {/* <h1 style={{color:this.props.style.color,fontSize:this.props.style.fontSize}}>Hello</h1> */}
               
               <h2 style={{color:color,fontSize:fontSize,border,paddingTop:paddingTop}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque, rem?</h2>
               
         </>
      )
   }
}

export default ClassComp