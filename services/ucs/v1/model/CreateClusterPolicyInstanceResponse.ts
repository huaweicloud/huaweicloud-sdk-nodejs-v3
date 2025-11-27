
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateClusterPolicyInstanceResponse extends SdkResponse {
    public jobID?: string;
    public constructor() { 
        super();
    }
    public withJobID(jobID: string): CreateClusterPolicyInstanceResponse {
        this['jobID'] = jobID;
        return this;
    }
}