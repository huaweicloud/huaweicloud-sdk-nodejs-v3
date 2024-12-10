
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpgradeNodePoolResponse extends SdkResponse {
    public jobid?: string;
    public constructor() { 
        super();
    }
    public withJobid(jobid: string): UpgradeNodePoolResponse {
        this['jobid'] = jobid;
        return this;
    }
}