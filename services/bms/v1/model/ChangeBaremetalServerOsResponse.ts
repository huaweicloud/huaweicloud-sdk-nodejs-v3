
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ChangeBaremetalServerOsResponse extends SdkResponse {
    public jobId?: string;
    public constructor() { 
        super();
    }
    public withJobId(jobId: string): ChangeBaremetalServerOsResponse {
        this['jobId'] = jobId;
        return this;
    }
}