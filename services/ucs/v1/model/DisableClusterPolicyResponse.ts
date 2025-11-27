
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DisableClusterPolicyResponse extends SdkResponse {
    public jobID?: string;
    public constructor() { 
        super();
    }
    public withJobID(jobID: string): DisableClusterPolicyResponse {
        this['jobID'] = jobID;
        return this;
    }
}