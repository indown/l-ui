import Icon from '../icon'
import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme'

describe('<Icon />', () => {
  it('icon is a react component', () => {
    const component = renderer.create(
      <Icon type='qq' />
    );
    expect(component.toJSON()).toMatchSnapshot()
  })
  it('icon be onClick', () => {
    const fn = jest.fn()
    const wrapper = mount(<Icon type='qq' onClick={fn}/>)
    wrapper.find('svg').simulate('click')
    expect(fn).toBeCalledTimes(1)
  })
})