

export class ListAlarmRuleResourcesRequest {
    private 'alarm_id'?: string;
    public offset?: number;
    public limit?: number;
    public constructor(alarmId?: string) { 
        this['alarm_id'] = alarmId;
    }
    public withAlarmId(alarmId: string): ListAlarmRuleResourcesRequest {
        this['alarm_id'] = alarmId;
        return this;
    }
    public set alarmId(alarmId: string  | undefined) {
        this['alarm_id'] = alarmId;
    }
    public get alarmId(): string | undefined {
        return this['alarm_id'];
    }
    public withOffset(offset: number): ListAlarmRuleResourcesRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListAlarmRuleResourcesRequest {
        this['limit'] = limit;
        return this;
    }
}