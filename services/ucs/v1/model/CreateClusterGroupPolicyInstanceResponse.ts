
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateClusterGroupPolicyInstanceResponse extends SdkResponse {
    public jobID?: string;
    public constructor() { 
        super();
    }
    public withJobID(jobID: string): CreateClusterGroupPolicyInstanceResponse {
        this['jobID'] = jobID;
        return this;
    }
}