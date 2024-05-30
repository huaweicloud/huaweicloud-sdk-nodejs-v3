import { SearchCatalogsResultDataValue } from './SearchCatalogsResultDataValue';


export class SearchCatalogsResultData {
    public value?: SearchCatalogsResultDataValue;
    public constructor() { 
    }
    public withValue(value: SearchCatalogsResultDataValue): SearchCatalogsResultData {
        this['value'] = value;
        return this;
    }
}