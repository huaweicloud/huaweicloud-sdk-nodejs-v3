

export class BatchEnableAlarmPoliciesRequestBody {
    private 'alarm_policy_ids'?: Array<string>;
    public enabled?: boolean;
    private 'retain_when_all_disabled'?: boolean;
    public constructor(alarmPolicyIds?: Array<string>, enabled?: boolean) { 
        this['alarm_policy_ids'] = alarmPolicyIds;
        this['enabled'] = enabled;
    }
    public withAlarmPolicyIds(alarmPolicyIds: Array<string>): BatchEnableAlarmPoliciesRequestBody {
        this['alarm_policy_ids'] = alarmPolicyIds;
        return this;
    }
    public set alarmPolicyIds(alarmPolicyIds: Array<string>  | undefined) {
        this['alarm_policy_ids'] = alarmPolicyIds;
    }
    public get alarmPolicyIds(): Array<string> | undefined {
        return this['alarm_policy_ids'];
    }
    public withEnabled(enabled: boolean): BatchEnableAlarmPoliciesRequestBody {
        this['enabled'] = enabled;
        return this;
    }
    public withRetainWhenAllDisabled(retainWhenAllDisabled: boolean): BatchEnableAlarmPoliciesRequestBody {
        this['retain_when_all_disabled'] = retainWhenAllDisabled;
        return this;
    }
    public set retainWhenAllDisabled(retainWhenAllDisabled: boolean  | undefined) {
        this['retain_when_all_disabled'] = retainWhenAllDisabled;
    }
    public get retainWhenAllDisabled(): boolean | undefined {
        return this['retain_when_all_disabled'];
    }
}