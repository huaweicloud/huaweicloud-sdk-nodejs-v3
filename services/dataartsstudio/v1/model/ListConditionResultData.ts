import { ListConditionResultDataValue } from './ListConditionResultDataValue';


export class ListConditionResultData {
    public value?: ListConditionResultDataValue;
    public constructor() { 
    }
    public withValue(value: ListConditionResultDataValue): ListConditionResultData {
        this['value'] = value;
        return this;
    }
}