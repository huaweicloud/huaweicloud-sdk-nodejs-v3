

export class BatchEnableAlarmsRequestBody {
    private 'alarm_ids'?: Array<string>;
    private 'alarm_enabled'?: boolean;
    public constructor(alarmIds?: Array<string>, alarmEnabled?: boolean) { 
        this['alarm_ids'] = alarmIds;
        this['alarm_enabled'] = alarmEnabled;
    }
    public withAlarmIds(alarmIds: Array<string>): BatchEnableAlarmsRequestBody {
        this['alarm_ids'] = alarmIds;
        return this;
    }
    public set alarmIds(alarmIds: Array<string>  | undefined) {
        this['alarm_ids'] = alarmIds;
    }
    public get alarmIds(): Array<string> | undefined {
        return this['alarm_ids'];
    }
    public withAlarmEnabled(alarmEnabled: boolean): BatchEnableAlarmsRequestBody {
        this['alarm_enabled'] = alarmEnabled;
        return this;
    }
    public set alarmEnabled(alarmEnabled: boolean  | undefined) {
        this['alarm_enabled'] = alarmEnabled;
    }
    public get alarmEnabled(): boolean | undefined {
        return this['alarm_enabled'];
    }
}