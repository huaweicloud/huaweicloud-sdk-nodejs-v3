import { RpoAndRtoInfo } from './RpoAndRtoInfo';


export class QueryRpoAndRtoResp {
    private 'job_id'?: string | undefined;
    private 'rpo_info'?: RpoAndRtoInfo | undefined;
    private 'rto_info'?: RpoAndRtoInfo | undefined;
    private 'error_code'?: string | undefined;
    private 'error_msg'?: string | undefined;
    public constructor() { 
    }
    public withJobId(jobId: string): QueryRpoAndRtoResp {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId() {
        return this['job_id'];
    }
    public withRpoInfo(rpoInfo: RpoAndRtoInfo): QueryRpoAndRtoResp {
        this['rpo_info'] = rpoInfo;
        return this;
    }
    public set rpoInfo(rpoInfo: RpoAndRtoInfo | undefined) {
        this['rpo_info'] = rpoInfo;
    }
    public get rpoInfo() {
        return this['rpo_info'];
    }
    public withRtoInfo(rtoInfo: RpoAndRtoInfo): QueryRpoAndRtoResp {
        this['rto_info'] = rtoInfo;
        return this;
    }
    public set rtoInfo(rtoInfo: RpoAndRtoInfo | undefined) {
        this['rto_info'] = rtoInfo;
    }
    public get rtoInfo() {
        return this['rto_info'];
    }
    public withErrorCode(errorCode: string): QueryRpoAndRtoResp {
        this['error_code'] = errorCode;
        return this;
    }
    public set errorCode(errorCode: string | undefined) {
        this['error_code'] = errorCode;
    }
    public get errorCode() {
        return this['error_code'];
    }
    public withErrorMsg(errorMsg: string): QueryRpoAndRtoResp {
        this['error_msg'] = errorMsg;
        return this;
    }
    public set errorMsg(errorMsg: string | undefined) {
        this['error_msg'] = errorMsg;
    }
    public get errorMsg() {
        return this['error_msg'];
    }
}