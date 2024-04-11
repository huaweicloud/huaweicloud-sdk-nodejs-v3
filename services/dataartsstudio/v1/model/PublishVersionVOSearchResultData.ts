import { PublishVersionVOSearchResultDataValue } from './PublishVersionVOSearchResultDataValue';


export class PublishVersionVOSearchResultData {
    public value?: PublishVersionVOSearchResultDataValue;
    public constructor() { 
    }
    public withValue(value: PublishVersionVOSearchResultDataValue): PublishVersionVOSearchResultData {
        this['value'] = value;
        return this;
    }
}