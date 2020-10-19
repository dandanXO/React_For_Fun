import React from 'react'

class ClassHelloWorld extends React.Component{
  render(){
    return(
    <h1>class {this.props.name}</h1>
    )
  }
}

export default ClassHelloWorld