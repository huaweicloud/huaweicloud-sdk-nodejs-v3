
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class SwitchOnColdTableResponse extends SdkResponse {
    private 'job_id'?: string;
    public constructor() { 
        super();
    }
    public withJobId(jobId: string): SwitchOnColdTableResponse {
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