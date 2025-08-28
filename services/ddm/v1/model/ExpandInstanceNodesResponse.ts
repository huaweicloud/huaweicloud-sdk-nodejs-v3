
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ExpandInstanceNodesResponse extends SdkResponse {
    public instanceId?: string;
    public instanceName?: string;
    public jobId?: string;
    public orderId?: string;
    public constructor() { 
        super();
    }
    public withInstanceId(instanceId: string): ExpandInstanceNodesResponse {
        this['instanceId'] = instanceId;
        return this;
    }
    public withInstanceName(instanceName: string): ExpandInstanceNodesResponse {
        this['instanceName'] = instanceName;
        return this;
    }
    public withJobId(jobId: string): ExpandInstanceNodesResponse {
        this['jobId'] = jobId;
        return this;
    }
    public withOrderId(orderId: string): ExpandInstanceNodesResponse {
        this['orderId'] = orderId;
        return this;
    }
}