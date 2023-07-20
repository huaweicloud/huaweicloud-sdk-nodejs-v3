import { QueryFlowCompareDataResp } from './QueryFlowCompareDataResp';


export class QueryStructDetailResp {
    private 'job_id'?: string;
    private 'error_code'?: string;
    private 'error_message'?: string;
    private 'struct_detail'?: QueryFlowCompareDataResp;
    public constructor(jobId?: string) { 
        this['job_id'] = jobId;
    }
    public withJobId(jobId: string): QueryStructDetailResp {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withErrorCode(errorCode: string): QueryStructDetailResp {
        this['error_code'] = errorCode;
        return this;
    }
    public set errorCode(errorCode: string  | undefined) {
        this['error_code'] = errorCode;
    }
    public get errorCode(): string | undefined {
        return this['error_code'];
    }
    public withErrorMessage(errorMessage: string): QueryStructDetailResp {
        this['error_message'] = errorMessage;
        return this;
    }
    public set errorMessage(errorMessage: string  | undefined) {
        this['error_message'] = errorMessage;
    }
    public get errorMessage(): string | undefined {
        return this['error_message'];
    }
    public withStructDetail(structDetail: QueryFlowCompareDataResp): QueryStructDetailResp {
        this['struct_detail'] = structDetail;
        return this;
    }
    public set structDetail(structDetail: QueryFlowCompareDataResp  | undefined) {
        this['struct_detail'] = structDetail;
    }
    public get structDetail(): QueryFlowCompareDataResp | undefined {
        return this['struct_detail'];
    }
}