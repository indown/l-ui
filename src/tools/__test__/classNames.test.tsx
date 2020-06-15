import {classNames} from '../index'

describe('className',() => {
    it('一个name',()=>{
        const result = classNames('name')
        expect(result).toEqual('name')
    })
})