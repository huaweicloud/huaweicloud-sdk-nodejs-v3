import { ListAllTablesResultDataValue } from './ListAllTablesResultDataValue';


export class ListAllTablesResultData {
    public value?: ListAllTablesResultDataValue;
    public constructor() { 
    }
    public withValue(value: ListAllTablesResultDataValue): ListAllTablesResultData {
        this['value'] = value;
        return this;
    }
}