import { ListDimensionsResultDataValue } from './ListDimensionsResultDataValue';


export class ListDimensionsResultData {
    public value?: ListDimensionsResultDataValue;
    public constructor() { 
    }
    public withValue(value: ListDimensionsResultDataValue): ListDimensionsResultData {
        this['value'] = value;
        return this;
    }
}