import { ListDimensionGroupsResultDataValue } from './ListDimensionGroupsResultDataValue';


export class ListDimensionGroupsResultData {
    public value?: ListDimensionGroupsResultDataValue;
    public constructor() { 
    }
    public withValue(value: ListDimensionGroupsResultDataValue): ListDimensionGroupsResultData {
        this['value'] = value;
        return this;
    }
}