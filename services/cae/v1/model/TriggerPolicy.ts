

export class TriggerPolicy {
    private 'trigger_type'?: TriggerPolicyTriggerTypeEnum | string;
    public period?: TriggerPolicyPeriodEnum | number;
    public operator?: TriggerPolicyOperatorEnum | string;
    public count?: number;
    public constructor(triggerType?: string) { 
        this['trigger_type'] = triggerType;
    }
    public withTriggerType(triggerType: TriggerPolicyTriggerTypeEnum | string): TriggerPolicy {
        this['trigger_type'] = triggerType;
        return this;
    }
    public set triggerType(triggerType: TriggerPolicyTriggerTypeEnum | string  | undefined) {
        this['trigger_type'] = triggerType;
    }
    public get triggerType(): TriggerPolicyTriggerTypeEnum | string | undefined {
        return this['trigger_type'];
    }
    public withPeriod(period: TriggerPolicyPeriodEnum | number): TriggerPolicy {
        this['period'] = period;
        return this;
    }
    public withOperator(operator: TriggerPolicyOperatorEnum | string): TriggerPolicy {
        this['operator'] = operator;
        return this;
    }
    public withCount(count: number): TriggerPolicy {
        this['count'] = count;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum TriggerPolicyTriggerTypeEnum {
    ACCUMULATIVE = 'accumulative',
    IMMEDIATELY = 'immediately'
}
/**
    * @export
    * @enum {string}
    */
export enum TriggerPolicyPeriodEnum {
    NUMBER_300 = 300,
    NUMBER_1200 = 1200,
    NUMBER_3600 = 3600,
    NUMBER_14400 = 14400,
    NUMBER_86400 = 86400
}
/**
    * @export
    * @enum {string}
    */
export enum TriggerPolicyOperatorEnum {
    GreaterThan = '>',
    GreaterThanOrEqualTo = '>='
}
