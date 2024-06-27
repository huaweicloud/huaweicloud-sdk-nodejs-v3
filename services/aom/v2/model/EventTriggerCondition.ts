

export class EventTriggerCondition {
    private 'event_name'?: string;
    private 'trigger_type'?: EventTriggerConditionTriggerTypeEnum | string;
    private 'aggregation_window'?: number;
    public operator?: string;
    public thresholds?: { [key: string]: number; };
    public frequency?: string;
    public constructor() { 
    }
    public withEventName(eventName: string): EventTriggerCondition {
        this['event_name'] = eventName;
        return this;
    }
    public set eventName(eventName: string  | undefined) {
        this['event_name'] = eventName;
    }
    public get eventName(): string | undefined {
        return this['event_name'];
    }
    public withTriggerType(triggerType: EventTriggerConditionTriggerTypeEnum | string): EventTriggerCondition {
        this['trigger_type'] = triggerType;
        return this;
    }
    public set triggerType(triggerType: EventTriggerConditionTriggerTypeEnum | string  | undefined) {
        this['trigger_type'] = triggerType;
    }
    public get triggerType(): EventTriggerConditionTriggerTypeEnum | string | undefined {
        return this['trigger_type'];
    }
    public withAggregationWindow(aggregationWindow: number): EventTriggerCondition {
        this['aggregation_window'] = aggregationWindow;
        return this;
    }
    public set aggregationWindow(aggregationWindow: number  | undefined) {
        this['aggregation_window'] = aggregationWindow;
    }
    public get aggregationWindow(): number | undefined {
        return this['aggregation_window'];
    }
    public withOperator(operator: string): EventTriggerCondition {
        this['operator'] = operator;
        return this;
    }
    public withThresholds(thresholds: { [key: string]: number; }): EventTriggerCondition {
        this['thresholds'] = thresholds;
        return this;
    }
    public withFrequency(frequency: string): EventTriggerCondition {
        this['frequency'] = frequency;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum EventTriggerConditionTriggerTypeEnum {
    IMMEDIATELY = 'immediately',
    ACCUMULATIVE = 'accumulative'
}
