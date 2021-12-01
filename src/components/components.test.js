import React from 'react';
import renderer from 'react-test-renderer';
import Homepage from './Home';
import Quotepage from './Quote';
import CalculatorDesign from './Calculator';
import ResultIcone from './resultIcone';

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