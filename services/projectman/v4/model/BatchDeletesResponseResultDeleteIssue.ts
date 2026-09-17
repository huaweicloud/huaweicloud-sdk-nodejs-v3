import { BatchDeletesResponseResultDeleteIssueDelIssue } from './BatchDeletesResponseResultDeleteIssueDelIssue';


export class BatchDeletesResponseResultDeleteIssue {
    private 'del_issue_id'?: Array<number>;
    private 'del_issue'?: Array<BatchDeletesResponseResultDeleteIssueDelIssue>;
    public constructor() { 
    }
    public withDelIssueId(delIssueId: Array<number>): BatchDeletesResponseResultDeleteIssue {
        this['del_issue_id'] = delIssueId;
        return this;
    }
    public set delIssueId(delIssueId: Array<number>  | undefined) {
        this['del_issue_id'] = delIssueId;
    }
    public get delIssueId(): Array<number> | undefined {
        return this['del_issue_id'];
    }
    public withDelIssue(delIssue: Array<BatchDeletesResponseResultDeleteIssueDelIssue>): BatchDeletesResponseResultDeleteIssue {
        this['del_issue'] = delIssue;
        return this;
    }
    public set delIssue(delIssue: Array<BatchDeletesResponseResultDeleteIssueDelIssue>  | undefined) {
        this['del_issue'] = delIssue;
    }
    public get delIssue(): Array<BatchDeletesResponseResultDeleteIssueDelIssue> | undefined {
        return this['del_issue'];
    }
}