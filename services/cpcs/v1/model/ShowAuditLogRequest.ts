

export class ShowAuditLogRequest {
    public limit?: number;
    public offset?: number;
    private 'start_time'?: number;
    private 'end_time'?: number;
    public constructor() { 
    }
    public withLimit(limit: number): ShowAuditLogRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ShowAuditLogRequest {
        this['offset'] = offset;
        return this;
    }
    public withStartTime(startTime: number): ShowAuditLogRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): number | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: number): ShowAuditLogRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): number | undefined {
        return this['end_time'];
    }
}