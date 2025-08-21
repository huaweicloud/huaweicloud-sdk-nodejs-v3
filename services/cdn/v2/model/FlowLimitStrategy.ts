

export class FlowLimitStrategy {
    private 'strategy_type'?: string;
    private 'item_type'?: string;
    private 'limit_value'?: string;
    private 'alarm_percent_threshold'?: string;
    private 'ban_time'?: string;
    public constructor() { 
    }
    public withStrategyType(strategyType: string): FlowLimitStrategy {
        this['strategy_type'] = strategyType;
        return this;
    }
    public set strategyType(strategyType: string  | undefined) {
        this['strategy_type'] = strategyType;
    }
    public get strategyType(): string | undefined {
        return this['strategy_type'];
    }
    public withItemType(itemType: string): FlowLimitStrategy {
        this['item_type'] = itemType;
        return this;
    }
    public set itemType(itemType: string  | undefined) {
        this['item_type'] = itemType;
    }
    public get itemType(): string | undefined {
        return this['item_type'];
    }
    public withLimitValue(limitValue: string): FlowLimitStrategy {
        this['limit_value'] = limitValue;
        return this;
    }
    public set limitValue(limitValue: string  | undefined) {
        this['limit_value'] = limitValue;
    }
    public get limitValue(): string | undefined {
        return this['limit_value'];
    }
    public withAlarmPercentThreshold(alarmPercentThreshold: string): FlowLimitStrategy {
        this['alarm_percent_threshold'] = alarmPercentThreshold;
        return this;
    }
    public set alarmPercentThreshold(alarmPercentThreshold: string  | undefined) {
        this['alarm_percent_threshold'] = alarmPercentThreshold;
    }
    public get alarmPercentThreshold(): string | undefined {
        return this['alarm_percent_threshold'];
    }
    public withBanTime(banTime: string): FlowLimitStrategy {
        this['ban_time'] = banTime;
        return this;
    }
    public set banTime(banTime: string  | undefined) {
        this['ban_time'] = banTime;
    }
    public get banTime(): string | undefined {
        return this['ban_time'];
    }
}