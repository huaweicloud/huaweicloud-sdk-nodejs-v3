
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class RestartInstanceResponse extends SdkResponse {
    public instanceId?: string;
    public instanceName?: string;
    public jobId?: string;
    public constructor() { 
        super();
    }
    public withInstanceId(instanceId: string): RestartInstanceResponse {
        this['instanceId'] = instanceId;
        return this;
    }
    public withInstanceName(instanceName: string): RestartInstanceResponse {
        this['instanceName'] = instanceName;
        return this;
    }
    public withJobId(jobId: string): RestartInstanceResponse {
        this['jobId'] = jobId;
        return this;
    }
}