
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class AddNodeResponse extends SdkResponse {
    public jobid?: string;
    public constructor() { 
        super();
    }
    public withJobid(jobid: string): AddNodeResponse {
        this['jobid'] = jobid;
        return this;
    }
}