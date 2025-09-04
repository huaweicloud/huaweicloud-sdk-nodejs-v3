

export class ListAuditLogsRequest {
    private 'X-Language'?: string;
    private 'instance_id'?: string;
    private 'start_time'?: string;
    private 'end_time'?: string;
    public offset?: number;
    public limit?: number;
    public constructor(instanceId?: string, startTime?: string, endTime?: string, offset?: number, limit?: number) { 
        this['instance_id'] = instanceId;
        this['start_time'] = startTime;
        this['end_time'] = endTime;
        this['offset'] = offset;
        this['limit'] = limit;
    }
    public withXLanguage(xLanguage: string): ListAuditLogsRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withInstanceId(instanceId: string): ListAuditLogsRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withStartTime(startTime: string): ListAuditLogsRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): ListAuditLogsRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withOffset(offset: number): ListAuditLogsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListAuditLogsRequest {
        this['limit'] = limit;
        return this;
    }
}