

export class Event2alarmRuleBodyTriggerPolicies {
    public id?: number;
    public name?: string;
    private 'trigger_type'?: Event2alarmRuleBodyTriggerPoliciesTriggerTypeEnum | string;
    public period?: number;
    public operator?: string;
    public count?: number;
    public level?: string;
    public constructor() { 
    }
    public withId(id: number): Event2alarmRuleBodyTriggerPolicies {
        this['id'] = id;
        return this;
    }
    public withName(name: string): Event2alarmRuleBodyTriggerPolicies {
        this['name'] = name;
        return this;
    }
    public withTriggerType(triggerType: Event2alarmRuleBodyTriggerPoliciesTriggerTypeEnum | string): Event2alarmRuleBodyTriggerPolicies {
        this['trigger_type'] = triggerType;
        return this;
    }
    public set triggerType(triggerType: Event2alarmRuleBodyTriggerPoliciesTriggerTypeEnum | string  | undefined) {
        this['trigger_type'] = triggerType;
    }
    public get triggerType(): Event2alarmRuleBodyTriggerPoliciesTriggerTypeEnum | string | undefined {
        return this['trigger_type'];
    }
    public withPeriod(period: number): Event2alarmRuleBodyTriggerPolicies {
        this['period'] = period;
        return this;
    }
    public withOperator(operator: string): Event2alarmRuleBodyTriggerPolicies {
        this['operator'] = operator;
        return this;
    }
    public withCount(count: number): Event2alarmRuleBodyTriggerPolicies {
        this['count'] = count;
        return this;
    }
    public withLevel(level: string): Event2alarmRuleBodyTriggerPolicies {
        this['level'] = level;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum Event2alarmRuleBodyTriggerPoliciesTriggerTypeEnum {
    ACCUMULATIVE = 'accumulative',
    NOTIFICATION = 'notification'
}
