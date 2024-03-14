
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CollectDbObjectsAsyncResponse extends SdkResponse {
    public id?: string;
    public status?: CollectDbObjectsAsyncResponseStatusEnum | string;
    private 'job_id'?: string;
    public constructor() { 
        super();
    }
    public withId(id: string): CollectDbObjectsAsyncResponse {
        this['id'] = id;
        return this;
    }
    public withStatus(status: CollectDbObjectsAsyncResponseStatusEnum | string): CollectDbObjectsAsyncResponse {
        this['status'] = status;
        return this;
    }
    public withJobId(jobId: string): CollectDbObjectsAsyncResponse {
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
export enum CollectDbObjectsAsyncResponseStatusEnum {
    PENDING = 'pending',
    FAILED = 'failed',
    SUCCESS = 'success'
}
