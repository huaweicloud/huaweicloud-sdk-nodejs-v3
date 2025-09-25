

export class ListHostRaspProtectHistoryInfoRequest {
    private 'enterprise_project_id'?: string;
    public region?: string;
    private 'host_id'?: string;
    private 'start_time'?: number;
    private 'end_time'?: number;
    public limit?: number;
    public offset?: number;
    private 'alarm_level'?: number;
    public constructor(startTime?: number, endTime?: number, limit?: number, offset?: number) { 
        this['start_time'] = startTime;
        this['end_time'] = endTime;
        this['limit'] = limit;
        this['offset'] = offset;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListHostRaspProtectHistoryInfoRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withRegion(region: string): ListHostRaspProtectHistoryInfoRequest {
        this['region'] = region;
        return this;
    }
    public withHostId(hostId: string): ListHostRaspProtectHistoryInfoRequest {
        this['host_id'] = hostId;
        return this;
    }
    public set hostId(hostId: string  | undefined) {
        this['host_id'] = hostId;
    }
    public get hostId(): string | undefined {
        return this['host_id'];
    }
    public withStartTime(startTime: number): ListHostRaspProtectHistoryInfoRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): number | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: number): ListHostRaspProtectHistoryInfoRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): number | undefined {
        return this['end_time'];
    }
    public withLimit(limit: number): ListHostRaspProtectHistoryInfoRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListHostRaspProtectHistoryInfoRequest {
        this['offset'] = offset;
        return this;
    }
    public withAlarmLevel(alarmLevel: number): ListHostRaspProtectHistoryInfoRequest {
        this['alarm_level'] = alarmLevel;
        return this;
    }
    public set alarmLevel(alarmLevel: number  | undefined) {
        this['alarm_level'] = alarmLevel;
    }
    public get alarmLevel(): number | undefined {
        return this['alarm_level'];
    }
}