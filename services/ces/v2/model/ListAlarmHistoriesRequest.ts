

export class ListAlarmHistoriesRequest {
    private 'alarm_id'?: string;
    public name?: string;
    public status?: string;
    public level?: number;
    public namespace?: string;
    private 'resource_id'?: string;
    public from?: string;
    public to?: string;
    public offset?: number;
    public limit?: number;
    public constructor() { 
    }
    public withAlarmId(alarmId: string): ListAlarmHistoriesRequest {
        this['alarm_id'] = alarmId;
        return this;
    }
    public set alarmId(alarmId: string  | undefined) {
        this['alarm_id'] = alarmId;
    }
    public get alarmId(): string | undefined {
        return this['alarm_id'];
    }
    public withName(name: string): ListAlarmHistoriesRequest {
        this['name'] = name;
        return this;
    }
    public withStatus(status: string): ListAlarmHistoriesRequest {
        this['status'] = status;
        return this;
    }
    public withLevel(level: number): ListAlarmHistoriesRequest {
        this['level'] = level;
        return this;
    }
    public withNamespace(namespace: string): ListAlarmHistoriesRequest {
        this['namespace'] = namespace;
        return this;
    }
    public withResourceId(resourceId: string): ListAlarmHistoriesRequest {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withFrom(from: string): ListAlarmHistoriesRequest {
        this['from'] = from;
        return this;
    }
    public withTo(to: string): ListAlarmHistoriesRequest {
        this['to'] = to;
        return this;
    }
    public withOffset(offset: number): ListAlarmHistoriesRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListAlarmHistoriesRequest {
        this['limit'] = limit;
        return this;
    }
}