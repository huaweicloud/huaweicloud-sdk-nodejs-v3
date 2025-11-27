
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DisableClustergroupPolicyResponse extends SdkResponse {
    public jobID?: string;
    public constructor() { 
        super();
    }
    public withJobID(jobID: string): DisableClustergroupPolicyResponse {
        this['jobID'] = jobID;
        return this;
    }
}