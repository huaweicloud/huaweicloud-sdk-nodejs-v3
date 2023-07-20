import { RpoAndRtoInfo } from './RpoAndRtoInfo';


export class QueryRpoAndRtoResp {
    private 'job_id'?: string;
    private 'rpo_info'?: RpoAndRtoInfo;
    private 'rto_info'?: RpoAndRtoInfo;
    private 'error_code'?: string;
    private 'error_msg'?: string;
    public constructor() { 
    }
    public withJobId(jobId: string): QueryRpoAndRtoResp {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withRpoInfo(rpoInfo: RpoAndRtoInfo): QueryRpoAndRtoResp {
        this['rpo_info'] = rpoInfo;
        return this;
    }
    public set rpoInfo(rpoInfo: RpoAndRtoInfo  | undefined) {
        this['rpo_info'] = rpoInfo;
    }
    public get rpoInfo(): RpoAndRtoInfo | undefined {
        return this['rpo_info'];
    }
    public withRtoInfo(rtoInfo: RpoAndRtoInfo): QueryRpoAndRtoResp {
        this['rto_info'] = rtoInfo;
        return this;
    }
    public set rtoInfo(rtoInfo: RpoAndRtoInfo  | undefined) {
        this['rto_info'] = rtoInfo;
    }
    public get rtoInfo(): RpoAndRtoInfo | undefined {
        return this['rto_info'];
    }
    public withErrorCode(errorCode: string): QueryRpoAndRtoResp {
        this['error_code'] = errorCode;
        return this;
    }
    public set errorCode(errorCode: string  | undefined) {
        this['error_code'] = errorCode;
    }
    public get errorCode(): string | undefined {
        return this['error_code'];
    }
    public withErrorMsg(errorMsg: string): QueryRpoAndRtoResp {
        this['error_msg'] = errorMsg;
        return this;
    }
    public set errorMsg(errorMsg: string  | undefined) {
        this['error_msg'] = errorMsg;
    }
    public get errorMsg(): string | undefined {
        return this['error_msg'];
    }
}