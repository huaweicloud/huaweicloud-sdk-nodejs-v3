

export class FlowLimitStrategy {
    private 'strategy_type'?: string;
    private 'item_type'?: string;
    private 'limit_value'?: number;
    private 'alarm_percent_threshold'?: number;
    private 'ban_time'?: number;
    public constructor(strategyType?: string, itemType?: string, limitValue?: number) { 
        this['strategy_type'] = strategyType;
        this['item_type'] = itemType;
        this['limit_value'] = limitValue;
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
    public withLimitValue(limitValue: number): FlowLimitStrategy {
        this['limit_value'] = limitValue;
        return this;
    }
    public set limitValue(limitValue: number  | undefined) {
        this['limit_value'] = limitValue;
    }
    public get limitValue(): number | undefined {
        return this['limit_value'];
    }
    public withAlarmPercentThreshold(alarmPercentThreshold: number): FlowLimitStrategy {
        this['alarm_percent_threshold'] = alarmPercentThreshold;
        return this;
    }
    public set alarmPercentThreshold(alarmPercentThreshold: number  | undefined) {
        this['alarm_percent_threshold'] = alarmPercentThreshold;
    }
    public get alarmPercentThreshold(): number | undefined {
        return this['alarm_percent_threshold'];
    }
    public withBanTime(banTime: number): FlowLimitStrategy {
        this['ban_time'] = banTime;
        return this;
    }
    public set banTime(banTime: number  | undefined) {
        this['ban_time'] = banTime;
    }
    public get banTime(): number | undefined {
        return this['ban_time'];
    }
}