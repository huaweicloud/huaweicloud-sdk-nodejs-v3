import { ListDimensionLogicTablesResultDataValue } from './ListDimensionLogicTablesResultDataValue';


export class ListDimensionLogicTablesResultData {
    public value?: ListDimensionLogicTablesResultDataValue;
    public constructor() { 
    }
    public withValue(value: ListDimensionLogicTablesResultDataValue): ListDimensionLogicTablesResultData {
        this['value'] = value;
        return this;
    }
}