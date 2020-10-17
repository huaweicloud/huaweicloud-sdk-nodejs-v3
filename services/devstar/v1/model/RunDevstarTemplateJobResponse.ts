
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class RunDevstarTemplateJobResponse extends SdkResponse {
    public jobId?: string;
    public constructor() { 
        super();
    }
    public withJobId(jobId?: string): RunDevstarTemplateJobResponse {
        this.jobId = jobId;
        return this;
    }
}