import { BatchCreateSnapshotRequestIssues } from './BatchCreateSnapshotRequestIssues';


export class BatchCreateSnapshotRequest {
    public issues?: Array<BatchCreateSnapshotRequestIssues>;
    public constructor(issues?: Array<BatchCreateSnapshotRequestIssues>) { 
        this['issues'] = issues;
    }
    public withIssues(issues: Array<BatchCreateSnapshotRequestIssues>): BatchCreateSnapshotRequest {
        this['issues'] = issues;
        return this;
    }
}