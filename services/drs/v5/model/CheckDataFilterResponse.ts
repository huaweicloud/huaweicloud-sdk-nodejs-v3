
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CheckDataFilterResponse extends SdkResponse {
    public id?: string;
    public status?: CheckDataFilterResponseStatusEnum | string;
    private 'job_id'?: string;
    public constructor() { 
        super();
    }
    public withId(id: string): CheckDataFilterResponse {
        this['id'] = id;
        return this;
    }
    public withStatus(status: CheckDataFilterResponseStatusEnum | string): CheckDataFilterResponse {
        this['status'] = status;
        return this;
    }
    public withJobId(jobId: string): CheckDataFilterResponse {
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
export enum CheckDataFilterResponseStatusEnum {
    PENDING = 'pending',
    FAILED = 'failed',
    SUCCESS = 'success'
}
