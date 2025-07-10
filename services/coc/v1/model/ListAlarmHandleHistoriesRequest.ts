

export class ListAlarmHandleHistoriesRequest {
    private 'alarm_id'?: string;
    public offset?: number;
    public limit?: number;
    public constructor(alarmId?: string, offset?: number, limit?: number) { 
        this['alarm_id'] = alarmId;
        this['offset'] = offset;
        this['limit'] = limit;
    }
    public withAlarmId(alarmId: string): ListAlarmHandleHistoriesRequest {
        this['alarm_id'] = alarmId;
        return this;
    }
    public set alarmId(alarmId: string  | undefined) {
        this['alarm_id'] = alarmId;
    }
    public get alarmId(): string | undefined {
        return this['alarm_id'];
    }
    public withOffset(offset: number): ListAlarmHandleHistoriesRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListAlarmHandleHistoriesRequest {
        this['limit'] = limit;
        return this;
    }
}