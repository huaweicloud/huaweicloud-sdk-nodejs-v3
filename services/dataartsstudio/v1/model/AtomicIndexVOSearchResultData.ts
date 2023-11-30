import { AtomicIndexVOSearchResultDataValue } from './AtomicIndexVOSearchResultDataValue';


export class AtomicIndexVOSearchResultData {
    public value?: AtomicIndexVOSearchResultDataValue;
    public constructor() { 
    }
    public withValue(value: AtomicIndexVOSearchResultDataValue): AtomicIndexVOSearchResultData {
        this['value'] = value;
        return this;
    }
}