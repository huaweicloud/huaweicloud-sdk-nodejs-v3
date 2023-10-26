
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class StopClusterResponse extends SdkResponse {
    public jobId?: Array<string>;
    public constructor() { 
        super();
    }
    public withJobId(jobId: Array<string>): StopClusterResponse {
        this['jobId'] = jobId;
        return this;
    }
}