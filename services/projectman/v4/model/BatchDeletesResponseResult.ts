import { BatchDeletesResponseResultDeleteIssue } from './BatchDeletesResponseResultDeleteIssue';


export class BatchDeletesResponseResult {
    private 'delete_issue'?: BatchDeletesResponseResultDeleteIssue;
    public constructor() { 
    }
    public withDeleteIssue(deleteIssue: BatchDeletesResponseResultDeleteIssue): BatchDeletesResponseResult {
        this['delete_issue'] = deleteIssue;
        return this;
    }
    public set deleteIssue(deleteIssue: BatchDeletesResponseResultDeleteIssue  | undefined) {
        this['delete_issue'] = deleteIssue;
    }
    public get deleteIssue(): BatchDeletesResponseResultDeleteIssue | undefined {
        return this['delete_issue'];
    }
}