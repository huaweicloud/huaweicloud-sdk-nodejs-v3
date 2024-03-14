
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CollectPositionAsyncResponse extends SdkResponse {
    public id?: string;
    public status?: CollectPositionAsyncResponseStatusEnum | string;
    private 'job_id'?: string;
    public constructor() { 
        super();
    }
    public withId(id: string): CollectPositionAsyncResponse {
        this['id'] = id;
        return this;
    }
    public withStatus(status: CollectPositionAsyncResponseStatusEnum | string): CollectPositionAsyncResponse {
        this['status'] = status;
        return this;
    }
    public withJobId(jobId: string): CollectPositionAsyncResponse {
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
export enum CollectPositionAsyncResponseStatusEnum {
    PENDING = 'pending',
    FAILED = 'failed',
    SUCCESS = 'success'
}
