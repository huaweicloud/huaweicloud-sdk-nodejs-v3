import { IssueVO } from './IssueVO';


export class IssueListResult {
    public issues?: Array<IssueVO>;
    public total?: number;
    public constructor() { 
    }
    public withIssues(issues: Array<IssueVO>): IssueListResult {
        this['issues'] = issues;
        return this;
    }
    public withTotal(total: number): IssueListResult {
        this['total'] = total;
        return this;
    }
}