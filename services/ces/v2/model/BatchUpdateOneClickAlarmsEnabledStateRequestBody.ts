

export class BatchUpdateOneClickAlarmsEnabledStateRequestBody {
    private 'alarm_ids'?: Array<string>;
    private 'alarm_enabled'?: boolean;
    private 'retain_when_all_disabled'?: boolean;
    private 'action_type'?: string;
    public constructor(alarmIds?: Array<string>, alarmEnabled?: boolean) { 
        this['alarm_ids'] = alarmIds;
        this['alarm_enabled'] = alarmEnabled;
    }
    public withAlarmIds(alarmIds: Array<string>): BatchUpdateOneClickAlarmsEnabledStateRequestBody {
        this['alarm_ids'] = alarmIds;
        return this;
    }
    public set alarmIds(alarmIds: Array<string>  | undefined) {
        this['alarm_ids'] = alarmIds;
    }
    public get alarmIds(): Array<string> | undefined {
        return this['alarm_ids'];
    }
    public withAlarmEnabled(alarmEnabled: boolean): BatchUpdateOneClickAlarmsEnabledStateRequestBody {
        this['alarm_enabled'] = alarmEnabled;
        return this;
    }
    public set alarmEnabled(alarmEnabled: boolean  | undefined) {
        this['alarm_enabled'] = alarmEnabled;
    }
    public get alarmEnabled(): boolean | undefined {
        return this['alarm_enabled'];
    }
    public withRetainWhenAllDisabled(retainWhenAllDisabled: boolean): BatchUpdateOneClickAlarmsEnabledStateRequestBody {
        this['retain_when_all_disabled'] = retainWhenAllDisabled;
        return this;
    }
    public set retainWhenAllDisabled(retainWhenAllDisabled: boolean  | undefined) {
        this['retain_when_all_disabled'] = retainWhenAllDisabled;
    }
    public get retainWhenAllDisabled(): boolean | undefined {
        return this['retain_when_all_disabled'];
    }
    public withActionType(actionType: string): BatchUpdateOneClickAlarmsEnabledStateRequestBody {
        this['action_type'] = actionType;
        return this;
    }
    public set actionType(actionType: string  | undefined) {
        this['action_type'] = actionType;
    }
    public get actionType(): string | undefined {
        return this['action_type'];
    }
}