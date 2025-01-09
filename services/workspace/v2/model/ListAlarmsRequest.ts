

export class ListAlarmsRequest {
    public level?: number;
    public offset?: number;
    public limit?: number;
    public constructor() { 
    }
    public withLevel(level: number): ListAlarmsRequest {
        this['level'] = level;
        return this;
    }
    public withOffset(offset: number): ListAlarmsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListAlarmsRequest {
        this['limit'] = limit;
        return this;
    }
}