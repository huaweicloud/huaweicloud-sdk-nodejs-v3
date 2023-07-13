

export class ListAlarmConfigsRequest {
    public offset?: string;
    public limit?: string;
    public constructor() { 
    }
    public withOffset(offset: string): ListAlarmConfigsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: string): ListAlarmConfigsRequest {
        this['limit'] = limit;
        return this;
    }
}