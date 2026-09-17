import { IssueOperateResult } from './IssueOperateResult';


export class IssueBatchOperateEntitiesResult {
    public success?: Array<IssueOperateResult>;
    public failed?: Array<IssueOperateResult>;
    private 'undeleted_trees'?: Array<IssueOperateResult>;
    public constructor() { 
    }
    public withSuccess(success: Array<IssueOperateResult>): IssueBatchOperateEntitiesResult {
        this['success'] = success;
        return this;
    }
    public withFailed(failed: Array<IssueOperateResult>): IssueBatchOperateEntitiesResult {
        this['failed'] = failed;
        return this;
    }
    public withUndeletedTrees(undeletedTrees: Array<IssueOperateResult>): IssueBatchOperateEntitiesResult {
        this['undeleted_trees'] = undeletedTrees;
        return this;
    }
    public set undeletedTrees(undeletedTrees: Array<IssueOperateResult>  | undefined) {
        this['undeleted_trees'] = undeletedTrees;
    }
    public get undeletedTrees(): Array<IssueOperateResult> | undefined {
        return this['undeleted_trees'];
    }
}