import React from 'react';
import './style.css';
class ResultIcone extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return <div className = "calculator-result"> <span> 0</span> </div>
    }
}
class CalculatorDesign extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    return (
      <div className = "calculator-container">
        <ResultIcone/>
      </div>
    );
  }
}
export { ResultIcone, CalculatorDesign };