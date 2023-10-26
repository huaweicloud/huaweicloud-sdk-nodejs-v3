
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class StartClusterResponse extends SdkResponse {
    public jobId?: Array<string>;
    public constructor() { 
        super();
    }
    public withJobId(jobId: Array<string>): StartClusterResponse {
        this['jobId'] = jobId;
        return this;
    }
}