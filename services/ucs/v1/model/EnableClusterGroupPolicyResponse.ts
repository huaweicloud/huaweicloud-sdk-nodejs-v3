
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class EnableClusterGroupPolicyResponse extends SdkResponse {
    public jobID?: string;
    public constructor() { 
        super();
    }
    public withJobID(jobID: string): EnableClusterGroupPolicyResponse {
        this['jobID'] = jobID;
        return this;
    }
}