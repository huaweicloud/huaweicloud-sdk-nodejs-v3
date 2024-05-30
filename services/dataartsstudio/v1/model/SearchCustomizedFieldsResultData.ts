import { SearchCustomizedFieldsResultDataValue } from './SearchCustomizedFieldsResultDataValue';


export class SearchCustomizedFieldsResultData {
    public value?: SearchCustomizedFieldsResultDataValue;
    public constructor() { 
    }
    public withValue(value: SearchCustomizedFieldsResultDataValue): SearchCustomizedFieldsResultData {
        this['value'] = value;
        return this;
    }
}