
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateLdapConfigResponse extends SdkResponse {
    public jobId?: string;
    public constructor() { 
        super();
    }
    public withJobId(jobId: string): CreateLdapConfigResponse {
        this['jobId'] = jobId;
        return this;
    }
}