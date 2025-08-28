
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShrinkInstanceNodesResponse extends SdkResponse {
    public instanceId?: string;
    public instanceName?: string;
    public jobId?: string;
    public orderId?: string;
    public constructor() { 
        super();
    }
    public withInstanceId(instanceId: string): ShrinkInstanceNodesResponse {
        this['instanceId'] = instanceId;
        return this;
    }
    public withInstanceName(instanceName: string): ShrinkInstanceNodesResponse {
        this['instanceName'] = instanceName;
        return this;
    }
    public withJobId(jobId: string): ShrinkInstanceNodesResponse {
        this['jobId'] = jobId;
        return this;
    }
    public withOrderId(orderId: string): ShrinkInstanceNodesResponse {
        this['orderId'] = orderId;
        return this;
    }
}