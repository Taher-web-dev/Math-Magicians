import React from 'react';
import './style.css';
import { ResultIcone } from './resultIcone';
import { LigneOfButton } from './ligneOfButton';
import calculate from '../logic/calculate';
class CalculatorDesign extends React.Component {
  constructor(props){
    super(props)
    this.state = {};
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick (e){
    console.log('clicked...');
    const target = e.target;
    const child = target.children;
    let targetElem;
    if (child.length > 0){
      targetElem = child[0];
    }else {
      targetElem = target;
    }
    const buttonName = targetElem.textContent;
    this.setState(dataObject =>{
      const newState = calculate(dataObject,buttonName);
      return newState;
    });
  }
  
  render(){
    return (
      <div className = "calculator-container">
        <ResultIcone total = {this.state.total}/>
        <LigneOfButton textBtns = {['AC', '+/-', '%','÷']} order = {2} handler = {this.handleClick}/>
        <LigneOfButton textBtns = {['7', '8', '9','x']} order = {3} handler = {this.handleClick}/> 
        <LigneOfButton textBtns = {['4', '5', '6','-']} order = {4} handler = {this.handleClick}/>
        <LigneOfButton textBtns = {['1', '2', '3','+']} order = {5} handler = {this.handleClick}/>
        <LigneOfButton textBtns = {['0', '.','=']} order = {6} handler = {this.handleClick}/>
      </div>
    );
  }
}
export { ResultIcone, CalculatorDesign };