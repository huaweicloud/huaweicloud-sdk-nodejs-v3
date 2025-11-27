
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class EnableClusterPolicyResponse extends SdkResponse {
    public jobID?: string;
    public constructor() { 
        super();
    }
    public withJobID(jobID: string): EnableClusterPolicyResponse {
        this['jobID'] = jobID;
        return this;
    }
}