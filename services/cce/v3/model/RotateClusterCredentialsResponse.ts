
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class RotateClusterCredentialsResponse extends SdkResponse {
    public jobid?: string;
    public constructor() { 
        super();
    }
    public withJobid(jobid: string): RotateClusterCredentialsResponse {
        this['jobid'] = jobid;
        return this;
    }
}