

export class ListAlarmWhiteListRequest {
    public region?: string;
    private 'enterprise_project_id'?: string;
    public hash?: string;
    private 'event_type'?: number;
    public offset?: number;
    public limit?: number;
    public constructor(region?: string) { 
        this['region'] = region;
    }
    public withRegion(region: string): ListAlarmWhiteListRequest {
        this['region'] = region;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListAlarmWhiteListRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withHash(hash: string): ListAlarmWhiteListRequest {
        this['hash'] = hash;
        return this;
    }
    public withEventType(eventType: number): ListAlarmWhiteListRequest {
        this['event_type'] = eventType;
        return this;
    }
    public set eventType(eventType: number  | undefined) {
        this['event_type'] = eventType;
    }
    public get eventType(): number | undefined {
        return this['event_type'];
    }
    public withOffset(offset: number): ListAlarmWhiteListRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListAlarmWhiteListRequest {
        this['limit'] = limit;
        return this;
    }
}