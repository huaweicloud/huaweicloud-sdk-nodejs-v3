
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowDataProcessingRulesResultResponse extends SdkResponse {
    public id?: string;
    public status?: ShowDataProcessingRulesResultResponseStatusEnum | string;
    private 'job_id'?: string;
    public constructor() { 
        super();
    }
    public withId(id: string): ShowDataProcessingRulesResultResponse {
        this['id'] = id;
        return this;
    }
    public withStatus(status: ShowDataProcessingRulesResultResponseStatusEnum | string): ShowDataProcessingRulesResultResponse {
        this['status'] = status;
        return this;
    }
    public withJobId(jobId: string): ShowDataProcessingRulesResultResponse {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowDataProcessingRulesResultResponseStatusEnum {
    PENDING = 'pending',
    FAILED = 'failed',
    SUCCESS = 'success'
}
