import React from 'react';
import renderer from 'react-test-renderer';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import LigneOfButton from './ligneOfButton';

test('ligneOf Button Click ', () => {
  const props = {
    textBtns : ['1', '3', '4','6'],
    order : 2,
    handler: jest.fn(),
  }
  const {textBtns, order, handler} = props;
  render(<LigneOfButton 
          textBtns = {textBtns} 
          order = {order}
          handler = {handler}
          />);
  const elt = screen.getAllByText(/\d+/);
  userEvent.click(elt[0]);
  expect(handler).toHaveBeenCalled();
});