import { QueryFlowCompareDataResp } from './QueryFlowCompareDataResp';


export class QueryStructDetailResp {
    private 'job_id': string | undefined;
    private 'error_code'?: string | undefined;
    private 'error_message'?: string | undefined;
    private 'struct_detail'?: QueryFlowCompareDataResp | undefined;
    public constructor(jobId?: any) { 
        this['job_id'] = jobId;
    }
    public withJobId(jobId: string): QueryStructDetailResp {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId() {
        return this['job_id'];
    }
    public withErrorCode(errorCode: string): QueryStructDetailResp {
        this['error_code'] = errorCode;
        return this;
    }
    public set errorCode(errorCode: string | undefined) {
        this['error_code'] = errorCode;
    }
    public get errorCode() {
        return this['error_code'];
    }
    public withErrorMessage(errorMessage: string): QueryStructDetailResp {
        this['error_message'] = errorMessage;
        return this;
    }
    public set errorMessage(errorMessage: string | undefined) {
        this['error_message'] = errorMessage;
    }
    public get errorMessage() {
        return this['error_message'];
    }
    public withStructDetail(structDetail: QueryFlowCompareDataResp): QueryStructDetailResp {
        this['struct_detail'] = structDetail;
        return this;
    }
    public set structDetail(structDetail: QueryFlowCompareDataResp | undefined) {
        this['struct_detail'] = structDetail;
    }
    public get structDetail() {
        return this['struct_detail'];
    }
}