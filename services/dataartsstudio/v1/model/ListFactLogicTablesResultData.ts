import { ListFactLogicTablesResultDataValue } from './ListFactLogicTablesResultDataValue';


export class ListFactLogicTablesResultData {
    public value?: ListFactLogicTablesResultDataValue;
    public constructor() { 
    }
    public withValue(value: ListFactLogicTablesResultDataValue): ListFactLogicTablesResultData {
        this['value'] = value;
        return this;
    }
}