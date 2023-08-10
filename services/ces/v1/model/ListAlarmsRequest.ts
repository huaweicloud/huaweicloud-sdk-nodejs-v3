

export class ListAlarmsRequest {
    public limit?: number;
    public order?: string;
    public start?: string;
    public constructor() { 
    }
    public withLimit(limit: number): ListAlarmsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOrder(order: string): ListAlarmsRequest {
        this['order'] = order;
        return this;
    }
    public withStart(start: string): ListAlarmsRequest {
        this['start'] = start;
        return this;
    }
}