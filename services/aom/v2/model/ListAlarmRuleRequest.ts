

export class ListAlarmRuleRequest {
    public offset?: string;
    public limit?: number;
    public constructor() { 
    }
    public withOffset(offset: string): ListAlarmRuleRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListAlarmRuleRequest {
        this['limit'] = limit;
        return this;
    }
}