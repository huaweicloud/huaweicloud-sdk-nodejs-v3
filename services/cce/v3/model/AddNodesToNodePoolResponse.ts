
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class AddNodesToNodePoolResponse extends SdkResponse {
    public jobid?: string;
    public constructor() { 
        super();
    }
    public withJobid(jobid: string): AddNodesToNodePoolResponse {
        this['jobid'] = jobid;
        return this;
    }
}