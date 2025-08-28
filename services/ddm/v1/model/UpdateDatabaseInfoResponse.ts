
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateDatabaseInfoResponse extends SdkResponse {
    public instanceId?: string;
    public jobId?: string;
    public constructor() { 
        super();
    }
    public withInstanceId(instanceId: string): UpdateDatabaseInfoResponse {
        this['instanceId'] = instanceId;
        return this;
    }
    public withJobId(jobId: string): UpdateDatabaseInfoResponse {
        this['jobId'] = jobId;
        return this;
    }
}