

export class ModifyAlarmActionReq {
    private 'alarm_enabled'?: boolean;
    public constructor(alarmEnabled?: boolean) { 
        this['alarm_enabled'] = alarmEnabled;
    }
    public withAlarmEnabled(alarmEnabled: boolean): ModifyAlarmActionReq {
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