import { SearchApprovalsResultDataValue } from './SearchApprovalsResultDataValue';


export class SearchApprovalsResultData {
    public value?: SearchApprovalsResultDataValue;
    public constructor() { 
    }
    public withValue(value: SearchApprovalsResultDataValue): SearchApprovalsResultData {
        this['value'] = value;
        return this;
    }
}