import { BatchOperateInfo } from './BatchOperateInfo';


export class BatchResultVO {
    private 'success_num'?: number;
    private 'fail_num'?: number;
    public success?: Array<BatchOperateInfo>;
    public failed?: Array<BatchOperateInfo>;
    public constructor() { 
    }
    public withSuccessNum(successNum: number): BatchResultVO {
        this['success_num'] = successNum;
        return this;
    }
    public set successNum(successNum: number  | undefined) {
        this['success_num'] = successNum;
    }
    public get successNum(): number | undefined {
        return this['success_num'];
    }
    public withFailNum(failNum: number): BatchResultVO {
        this['fail_num'] = failNum;
        return this;
    }
    public set failNum(failNum: number  | undefined) {
        this['fail_num'] = failNum;
    }
    public get failNum(): number | undefined {
        return this['fail_num'];
    }
    public withSuccess(success: Array<BatchOperateInfo>): BatchResultVO {
        this['success'] = success;
        return this;
    }
    public withFailed(failed: Array<BatchOperateInfo>): BatchResultVO {
        this['failed'] = failed;
        return this;
    }
}