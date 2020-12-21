import Button from '../index'
import React from 'react';
import renderer from 'react-test-renderer';
import { mount, render } from 'enzyme'

describe('<Button />', () => {
  it('Button is a react component', () => {
    const component = renderer.create(
      <Button />
    );
    expect(component.toJSON()).toMatchSnapshot()
  })
  it('Button be onClick', () => {
    const fn = jest.fn()
    const wrapper = mount(<Button onClick={fn}/>)
    wrapper.find('button').simulate('click')
    expect(fn).toBeCalledTimes(1)
  })
  it('Button has this className', () => {
    const wrapper = render(<Button className='test-classname'/>)
    expect(wrapper.hasClass('test-classname'))
  })
})