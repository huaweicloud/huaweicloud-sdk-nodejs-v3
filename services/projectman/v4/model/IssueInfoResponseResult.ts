import { IssueDetailResponseV2 } from './IssueDetailResponseV2';


export class IssueInfoResponseResult {
    public issue?: IssueDetailResponseV2;
    public constructor() { 
    }
    public withIssue(issue: IssueDetailResponseV2): IssueInfoResponseResult {
        this['issue'] = issue;
        return this;
    }
}