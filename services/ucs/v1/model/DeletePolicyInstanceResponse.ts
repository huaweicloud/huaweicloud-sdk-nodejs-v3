
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeletePolicyInstanceResponse extends SdkResponse {
    public jobID?: string;
    public constructor() { 
        super();
    }
    public withJobID(jobID: string): DeletePolicyInstanceResponse {
        this['jobID'] = jobID;
        return this;
    }
}