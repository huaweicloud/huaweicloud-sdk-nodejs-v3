
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowUpdateObjectSavingStatusResponse extends SdkResponse {
    public id?: string;
    public status?: ShowUpdateObjectSavingStatusResponseStatusEnum | string;
    private 'job_id'?: string;
    public constructor() { 
        super();
    }
    public withId(id: string): ShowUpdateObjectSavingStatusResponse {
        this['id'] = id;
        return this;
    }
    public withStatus(status: ShowUpdateObjectSavingStatusResponseStatusEnum | string): ShowUpdateObjectSavingStatusResponse {
        this['status'] = status;
        return this;
    }
    public withJobId(jobId: string): ShowUpdateObjectSavingStatusResponse {
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
export enum ShowUpdateObjectSavingStatusResponseStatusEnum {
    PENDING = 'pending',
    FAILED = 'failed',
    SUCCESS = 'success'
}
