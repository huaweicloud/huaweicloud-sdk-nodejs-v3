import { SearchSubjectResultDataValue } from './SearchSubjectResultDataValue';


export class SearchSubjectResultData {
    public value?: SearchSubjectResultDataValue;
    public constructor() { 
    }
    public withValue(value: SearchSubjectResultDataValue): SearchSubjectResultData {
        this['value'] = value;
        return this;
    }
}