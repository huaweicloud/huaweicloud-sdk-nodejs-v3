
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ResetNodeResponse extends SdkResponse {
    public jobid?: string;
    public constructor() { 
        super();
    }
    public withJobid(jobid: string): ResetNodeResponse {
        this['jobid'] = jobid;
        return this;
    }
}