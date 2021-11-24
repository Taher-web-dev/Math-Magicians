import React from 'react';
import './style.css';
import { ResultIcone } from './resultIcone';
import { LigneOfButton } from './ligneOfButton';
class CalculatorDesign extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    return (
      <div className = "calculator-container">
        <ResultIcone/>
        <LigneOfButton textBtns = {['AC', '+/-', '%','÷']} order = {2} />
        <LigneOfButton textBtns = {['7', '8', '9','x']} order = {3} />
        <LigneOfButton textBtns = {['4', '5', '6','-']} order = {4} />
        <LigneOfButton textBtns = {['1', '2', '3','+']} order = {5} />
        <LigneOfButton textBtns = {['0', '.','=']} order = {6} />
      </div>
    );
  }
}
export { ResultIcone, CalculatorDesign };