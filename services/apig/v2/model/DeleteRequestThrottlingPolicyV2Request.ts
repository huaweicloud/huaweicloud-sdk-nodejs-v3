

export class DeleteRequestThrottlingPolicyV2Request {
    private 'instance_id'?: string;
    private 'throttle_id'?: string;
    public constructor(instanceId?: string, throttleId?: string) { 
        this['instance_id'] = instanceId;
        this['throttle_id'] = throttleId;
    }
    public withInstanceId(instanceId: string): DeleteRequestThrottlingPolicyV2Request {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withThrottleId(throttleId: string): DeleteRequestThrottlingPolicyV2Request {
        this['throttle_id'] = throttleId;
        return this;
    }
    public set throttleId(throttleId: string  | undefined) {
        this['throttle_id'] = throttleId;
    }
    public get throttleId(): string | undefined {
        return this['throttle_id'];
    }
}