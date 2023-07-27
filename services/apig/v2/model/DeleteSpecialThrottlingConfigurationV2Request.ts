

export class DeleteSpecialThrottlingConfigurationV2Request {
    private 'instance_id'?: string;
    private 'throttle_id'?: string;
    private 'strategy_id'?: string;
    public constructor(instanceId?: string, throttleId?: string, strategyId?: string) { 
        this['instance_id'] = instanceId;
        this['throttle_id'] = throttleId;
        this['strategy_id'] = strategyId;
    }
    public withInstanceId(instanceId: string): DeleteSpecialThrottlingConfigurationV2Request {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withThrottleId(throttleId: string): DeleteSpecialThrottlingConfigurationV2Request {
        this['throttle_id'] = throttleId;
        return this;
    }
    public set throttleId(throttleId: string  | undefined) {
        this['throttle_id'] = throttleId;
    }
    public get throttleId(): string | undefined {
        return this['throttle_id'];
    }
    public withStrategyId(strategyId: string): DeleteSpecialThrottlingConfigurationV2Request {
        this['strategy_id'] = strategyId;
        return this;
    }
    public set strategyId(strategyId: string  | undefined) {
        this['strategy_id'] = strategyId;
    }
    public get strategyId(): string | undefined {
        return this['strategy_id'];
    }
}