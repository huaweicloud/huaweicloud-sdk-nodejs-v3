import { IssueUpdateAttribute } from './IssueUpdateAttribute';


export class BatchUpdateIssuesParam {
    public id?: Array<string>;
    public attribute?: IssueUpdateAttribute;
    public constructor(id?: Array<string>, attribute?: IssueUpdateAttribute) { 
        this['id'] = id;
        this['attribute'] = attribute;
    }
    public withId(id: Array<string>): BatchUpdateIssuesParam {
        this['id'] = id;
        return this;
    }
    public withAttribute(attribute: IssueUpdateAttribute): BatchUpdateIssuesParam {
        this['attribute'] = attribute;
        return this;
    }
}