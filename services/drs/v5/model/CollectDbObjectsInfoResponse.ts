
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CollectDbObjectsInfoResponse extends SdkResponse {
    public id?: string;
    public status?: CollectDbObjectsInfoResponseStatusEnum | string;
    private 'job_id'?: string;
    public constructor() { 
        super();
    }
    public withId(id: string): CollectDbObjectsInfoResponse {
        this['id'] = id;
        return this;
    }
    public withStatus(status: CollectDbObjectsInfoResponseStatusEnum | string): CollectDbObjectsInfoResponse {
        this['status'] = status;
        return this;
    }
    public withJobId(jobId: string): CollectDbObjectsInfoResponse {
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
export enum CollectDbObjectsInfoResponseStatusEnum {
    PENDING = 'pending',
    FAILED = 'failed',
    SUCCESS = 'success'
}
