// import sum from '../sum'

// test('adds 1 + 2 to equal 3', () => {
//   expect(sum(1, 2)).toBe(3);
// });

import Sum from '../sum'
import React from 'react';
import renderer from 'react-test-renderer';

test('Sum is a react component!',() => {
  const component = renderer.create(
    <Sum></Sum>
  );
  expect(component.toJSON()).toMatchSnapshot()
})