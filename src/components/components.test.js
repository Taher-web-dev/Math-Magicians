import React from 'react';
import renderer from 'react-test-renderer';
import Homepage from './Home';
import Quotepage from './Quote';
import CalculatorDesign from './Calculator';
import ResultIcone from './resultIcone';
import LigneOfButton from './ligneOfButton'

test('render correctly home page', () => {
  const tree = renderer.create(<Homepage />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('render correctly Quote page', () => {
  const tree = renderer.create(<Quotepage />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('render correctly ResultIcone component', () => {
  const title = 'Taher & Ugur'
  const tree = renderer.create(<ResultIcone />).toJSON();
  expect(tree).toMatchSnapshot();
});

describe('render correctly LigneOfButton component', ()=> {
  const props = {
      order : 2,
      handler : jest.fn()
  }
  it('render correctly when there is 3 buttons',()=> {
    props.textBtns = ['+', '-', '*'];
    const tree = renderer.create(<LigneOfButton
        textBtns={props.textBtns}
        order = {props.order}
        handler = {props.handler}
        />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('render correctly when there is 4 buttons',()=> {
    props.textBtns = ['+', '-', '*', '/'];
    const tree = renderer.create(<LigneOfButton
        textBtns={props.textBtns}
        order = {props.order}
        handler = {props.handler}
        />).toJSON();
    expect(tree).toMatchSnapshot();
  });
})