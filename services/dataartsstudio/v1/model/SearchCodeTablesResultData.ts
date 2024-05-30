import { SearchCodeTablesResultDataValue } from './SearchCodeTablesResultDataValue';


export class SearchCodeTablesResultData {
    public value?: SearchCodeTablesResultDataValue;
    public constructor() { 
    }
    public withValue(value: SearchCodeTablesResultDataValue): SearchCodeTablesResultData {
        this['value'] = value;
        return this;
    }
}