
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DisableClusterGroupPolicyResponse extends SdkResponse {
    public jobID?: string;
    public constructor() { 
        super();
    }
    public withJobID(jobID: string): DisableClusterGroupPolicyResponse {
        this['jobID'] = jobID;
        return this;
    }
}