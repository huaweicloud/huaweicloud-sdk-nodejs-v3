

export class ListAutoScalingHistoryRequest {
    private 'instance_id'?: string;
    private 'X-Language'?: string;
    private 'strategy_type'?: string;
    public offset?: number;
    public limit?: number;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): ListAutoScalingHistoryRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withXLanguage(xLanguage: string): ListAutoScalingHistoryRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withStrategyType(strategyType: string): ListAutoScalingHistoryRequest {
        this['strategy_type'] = strategyType;
        return this;
    }
    public set strategyType(strategyType: string  | undefined) {
        this['strategy_type'] = strategyType;
    }
    public get strategyType(): string | undefined {
        return this['strategy_type'];
    }
    public withOffset(offset: number): ListAutoScalingHistoryRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListAutoScalingHistoryRequest {
        this['limit'] = limit;
        return this;
    }
}