import { IssueNew } from './IssueNew';


export class UpdateIssueFlowsResponseResult {
    public issue?: IssueNew;
    public constructor() { 
    }
    public withIssue(issue: IssueNew): UpdateIssueFlowsResponseResult {
        this['issue'] = issue;
        return this;
    }
}