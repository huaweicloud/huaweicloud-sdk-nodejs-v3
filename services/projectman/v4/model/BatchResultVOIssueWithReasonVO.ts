import { IssueWithReasonVO } from './IssueWithReasonVO';


export class BatchResultVOIssueWithReasonVO {
    private 'success_num'?: number;
    private 'fail_num'?: number;
    public failed?: Array<IssueWithReasonVO>;
    public constructor() { 
    }
    public withSuccessNum(successNum: number): BatchResultVOIssueWithReasonVO {
        this['success_num'] = successNum;
        return this;
    }
    public set successNum(successNum: number  | undefined) {
        this['success_num'] = successNum;
    }
    public get successNum(): number | undefined {
        return this['success_num'];
    }
    public withFailNum(failNum: number): BatchResultVOIssueWithReasonVO {
        this['fail_num'] = failNum;
        return this;
    }
    public set failNum(failNum: number  | undefined) {
        this['fail_num'] = failNum;
    }
    public get failNum(): number | undefined {
        return this['fail_num'];
    }
    public withFailed(failed: Array<IssueWithReasonVO>): BatchResultVOIssueWithReasonVO {
        this['failed'] = failed;
        return this;
    }
}