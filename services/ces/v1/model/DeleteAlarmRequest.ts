

export class DeleteAlarmRequest {
    private 'alarm_id'?: string;
    public constructor(alarmId?: string) { 
        this['alarm_id'] = alarmId;
    }
    public withAlarmId(alarmId: string): DeleteAlarmRequest {
        this['alarm_id'] = alarmId;
        return this;
    }
    public set alarmId(alarmId: string  | undefined) {
        this['alarm_id'] = alarmId;
    }
    public get alarmId(): string | undefined {
        return this['alarm_id'];
    }
}