import { ListApproversResultDataValue } from './ListApproversResultDataValue';


export class ListApproversResultData {
    public value?: ListApproversResultDataValue;
    public constructor() { 
    }
    public withValue(value: ListApproversResultDataValue): ListApproversResultData {
        this['value'] = value;
        return this;
    }
}