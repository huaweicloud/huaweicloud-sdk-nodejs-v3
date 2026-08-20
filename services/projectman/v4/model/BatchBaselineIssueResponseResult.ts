import { IssueBaselineResult } from './IssueBaselineResult';


export class BatchBaselineIssueResponseResult {
    public success?: Array<IssueBaselineResult>;
    public failed?: Array<IssueBaselineResult>;
    private 'success_num'?: number;
    private 'fail_num'?: number;
    public constructor() { 
    }
    public withSuccess(success: Array<IssueBaselineResult>): BatchBaselineIssueResponseResult {
        this['success'] = success;
        return this;
    }
    public withFailed(failed: Array<IssueBaselineResult>): BatchBaselineIssueResponseResult {
        this['failed'] = failed;
        return this;
    }
    public withSuccessNum(successNum: number): BatchBaselineIssueResponseResult {
        this['success_num'] = successNum;
        return this;
    }
    public set successNum(successNum: number  | undefined) {
        this['success_num'] = successNum;
    }
    public get successNum(): number | undefined {
        return this['success_num'];
    }
    public withFailNum(failNum: number): BatchBaselineIssueResponseResult {
        this['fail_num'] = failNum;
        return this;
    }
    public set failNum(failNum: number  | undefined) {
        this['fail_num'] = failNum;
    }
    public get failNum(): number | undefined {
        return this['fail_num'];
    }
}