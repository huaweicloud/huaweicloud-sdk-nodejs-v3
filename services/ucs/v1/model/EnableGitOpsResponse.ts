
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class EnableGitOpsResponse extends SdkResponse {
    public jobID?: string;
    public constructor() { 
        super();
    }
    public withJobID(jobID: string): EnableGitOpsResponse {
        this['jobID'] = jobID;
        return this;
    }
}