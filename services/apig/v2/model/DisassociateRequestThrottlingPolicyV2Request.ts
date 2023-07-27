

export class DisassociateRequestThrottlingPolicyV2Request {
    private 'instance_id'?: string;
    private 'throttle_binding_id'?: string;
    public constructor(instanceId?: string, throttleBindingId?: string) { 
        this['instance_id'] = instanceId;
        this['throttle_binding_id'] = throttleBindingId;
    }
    public withInstanceId(instanceId: string): DisassociateRequestThrottlingPolicyV2Request {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withThrottleBindingId(throttleBindingId: string): DisassociateRequestThrottlingPolicyV2Request {
        this['throttle_binding_id'] = throttleBindingId;
        return this;
    }
    public set throttleBindingId(throttleBindingId: string  | undefined) {
        this['throttle_binding_id'] = throttleBindingId;
    }
    public get throttleBindingId(): string | undefined {
        return this['throttle_binding_id'];
    }
}