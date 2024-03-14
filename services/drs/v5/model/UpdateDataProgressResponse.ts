
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateDataProgressResponse extends SdkResponse {
    public id?: string;
    public status?: UpdateDataProgressResponseStatusEnum | string;
    private 'job_id'?: string;
    public constructor() { 
        super();
    }
    public withId(id: string): UpdateDataProgressResponse {
        this['id'] = id;
        return this;
    }
    public withStatus(status: UpdateDataProgressResponseStatusEnum | string): UpdateDataProgressResponse {
        this['status'] = status;
        return this;
    }
    public withJobId(jobId: string): UpdateDataProgressResponse {
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
export enum UpdateDataProgressResponseStatusEnum {
    PENDING = 'pending',
    FAILED = 'failed',
    SUCCESS = 'success'
}
