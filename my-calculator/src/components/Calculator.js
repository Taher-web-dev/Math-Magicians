import React from 'react';

class ResultIcone extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return <div className = "calculator-result"> 0 </div>
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