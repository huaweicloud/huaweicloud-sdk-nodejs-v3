import { SearchSubjectNewResultDataValue } from './SearchSubjectNewResultDataValue';


export class SearchSubjectNewResultData {
    public value?: SearchSubjectNewResultDataValue;
    public constructor() { 
    }
    public withValue(value: SearchSubjectNewResultDataValue): SearchSubjectNewResultData {
        this['value'] = value;
        return this;
    }
}