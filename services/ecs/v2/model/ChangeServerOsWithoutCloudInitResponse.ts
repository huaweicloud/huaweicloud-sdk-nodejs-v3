
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ChangeServerOsWithoutCloudInitResponse extends SdkResponse {
    private 'job_id'?: string | undefined;
    public constructor() { 
        super();
    }
    public withJobId(jobId: string): ChangeServerOsWithoutCloudInitResponse {
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