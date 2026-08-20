import { BatchBaselineIpdIssuesParamAttribute } from './BatchBaselineIpdIssuesParamAttribute';


export class BatchBaselineIpdIssuesParam {
    public id?: Array<string>;
    public attribute?: BatchBaselineIpdIssuesParamAttribute;
    public constructor(id?: Array<string>, attribute?: BatchBaselineIpdIssuesParamAttribute) { 
        this['id'] = id;
        this['attribute'] = attribute;
    }
    public withId(id: Array<string>): BatchBaselineIpdIssuesParam {
        this['id'] = id;
        return this;
    }
    public withAttribute(attribute: BatchBaselineIpdIssuesParamAttribute): BatchBaselineIpdIssuesParam {
        this['attribute'] = attribute;
        return this;
    }
}