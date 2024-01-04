
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateLdapConfigResponse extends SdkResponse {
    public jobId?: string;
    public constructor() { 
        super();
    }
    public withJobId(jobId: string): UpdateLdapConfigResponse {
        this['jobId'] = jobId;
        return this;
    }
}