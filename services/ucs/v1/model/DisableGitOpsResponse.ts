
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DisableGitOpsResponse extends SdkResponse {
    public jobID?: string;
    public constructor() { 
        super();
    }
    public withJobID(jobID: string): DisableGitOpsResponse {
        this['jobID'] = jobID;
        return this;
    }
}