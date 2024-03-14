
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CollectColumnsResponse extends SdkResponse {
    public id?: string;
    public status?: CollectColumnsResponseStatusEnum | string;
    private 'job_id'?: string;
    public constructor() { 
        super();
    }
    public withId(id: string): CollectColumnsResponse {
        this['id'] = id;
        return this;
    }
    public withStatus(status: CollectColumnsResponseStatusEnum | string): CollectColumnsResponse {
        this['status'] = status;
        return this;
    }
    public withJobId(jobId: string): CollectColumnsResponse {
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
export enum CollectColumnsResponseStatusEnum {
    PENDING = 'pending',
    FAILED = 'failed',
    SUCCESS = 'success'
}
