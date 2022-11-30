
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ResizePostPaidServerResponse extends SdkResponse {
    private 'job_id'?: string | undefined;
    public constructor() { 
        super();
    }
    public withJobId(jobId: string): ResizePostPaidServerResponse {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId() {
        return this['job_id'];
    }
}