

export class BatchDeleteAlarmsRequestBody {
    private 'alarm_ids'?: Array<string>;
    public constructor(alarmIds?: Array<string>) { 
        this['alarm_ids'] = alarmIds;
    }
    public withAlarmIds(alarmIds: Array<string>): BatchDeleteAlarmsRequestBody {
        this['alarm_ids'] = alarmIds;
        return this;
    }
    public set alarmIds(alarmIds: Array<string>  | undefined) {
        this['alarm_ids'] = alarmIds;
    }
    public get alarmIds(): Array<string> | undefined {
        return this['alarm_ids'];
    }
}