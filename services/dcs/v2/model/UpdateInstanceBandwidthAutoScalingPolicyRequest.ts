import { UpdateInstanceBandwidthAutoScalingPolicyRequestBody } from './UpdateInstanceBandwidthAutoScalingPolicyRequestBody';


export class UpdateInstanceBandwidthAutoScalingPolicyRequest {
    private 'instance_id'?: string;
    public body?: UpdateInstanceBandwidthAutoScalingPolicyRequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): UpdateInstanceBandwidthAutoScalingPolicyRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: UpdateInstanceBandwidthAutoScalingPolicyRequestBody): UpdateInstanceBandwidthAutoScalingPolicyRequest {
        this['body'] = body;
        return this;
    }
}