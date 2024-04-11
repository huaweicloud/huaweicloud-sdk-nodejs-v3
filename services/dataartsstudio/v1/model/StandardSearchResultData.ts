import { StandardSearchResultDataValue } from './StandardSearchResultDataValue';


export class StandardSearchResultData {
    public value?: StandardSearchResultDataValue;
    public constructor() { 
    }
    public withValue(value: StandardSearchResultDataValue): StandardSearchResultData {
        this['value'] = value;
        return this;
    }
}