
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class EnableClustergroupPolicyResponse extends SdkResponse {
    public jobID?: string;
    public constructor() { 
        super();
    }
    public withJobID(jobID: string): EnableClustergroupPolicyResponse {
        this['jobID'] = jobID;
        return this;
    }
}