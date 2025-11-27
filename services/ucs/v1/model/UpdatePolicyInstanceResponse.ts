
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdatePolicyInstanceResponse extends SdkResponse {
    public jobID?: string;
    public constructor() { 
        super();
    }
    public withJobID(jobID: string): UpdatePolicyInstanceResponse {
        this['jobID'] = jobID;
        return this;
    }
}