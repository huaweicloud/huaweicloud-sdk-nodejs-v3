

export class ListAlarmSubsRequest {
    public offset?: string;
    public limit?: string;
    public constructor() { 
    }
    public withOffset(offset: string): ListAlarmSubsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: string): ListAlarmSubsRequest {
        this['limit'] = limit;
        return this;
    }
}