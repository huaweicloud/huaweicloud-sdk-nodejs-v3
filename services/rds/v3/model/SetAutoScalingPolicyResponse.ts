
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class SetAutoScalingPolicyResponse extends SdkResponse {
    private 'instance_id'?: string;
    public status?: string;
    public constructor() { 
        super();
    }
    public withInstanceId(instanceId: string): SetAutoScalingPolicyResponse {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withStatus(status: string): SetAutoScalingPolicyResponse {
        this['status'] = status;
        return this;
    }
}