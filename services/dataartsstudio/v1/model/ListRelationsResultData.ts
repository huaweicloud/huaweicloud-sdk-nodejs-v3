import { ListRelationsResultDataValue } from './ListRelationsResultDataValue';


export class ListRelationsResultData {
    public value?: ListRelationsResultDataValue;
    public constructor() { 
    }
    public withValue(value: ListRelationsResultDataValue): ListRelationsResultData {
        this['value'] = value;
        return this;
    }
}