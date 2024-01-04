
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteLdapConfigResponse extends SdkResponse {
    public jobId?: string;
    public constructor() { 
        super();
    }
    public withJobId(jobId: string): DeleteLdapConfigResponse {
        this['jobId'] = jobId;
        return this;
    }
}