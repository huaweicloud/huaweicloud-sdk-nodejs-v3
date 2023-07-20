

export class DeleteAlarmSubRequest {
    private 'alarm_sub_id'?: string;
    public constructor(alarmSubId?: string) { 
        this['alarm_sub_id'] = alarmSubId;
    }
    public withAlarmSubId(alarmSubId: string): DeleteAlarmSubRequest {
        this['alarm_sub_id'] = alarmSubId;
        return this;
    }
    public set alarmSubId(alarmSubId: string  | undefined) {
        this['alarm_sub_id'] = alarmSubId;
    }
    public get alarmSubId(): string | undefined {
        return this['alarm_sub_id'];
    }
}