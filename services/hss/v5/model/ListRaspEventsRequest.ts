

export class ListRaspEventsRequest {
    private 'enterprise_project_id'?: string;
    public offset?: number;
    public limit?: number;
    private 'host_id'?: string;
    private 'start_time'?: number;
    private 'end_time'?: number;
    private 'app_type'?: string;
    public severity?: string;
    private 'attack_tag'?: string;
    private 'protect_status'?: string;
    public constructor(hostId?: string, startTime?: number, endTime?: number) { 
        this['host_id'] = hostId;
        this['start_time'] = startTime;
        this['end_time'] = endTime;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListRaspEventsRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withOffset(offset: number): ListRaspEventsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListRaspEventsRequest {
        this['limit'] = limit;
        return this;
    }
    public withHostId(hostId: string): ListRaspEventsRequest {
        this['host_id'] = hostId;
        return this;
    }
    public set hostId(hostId: string  | undefined) {
        this['host_id'] = hostId;
    }
    public get hostId(): string | undefined {
        return this['host_id'];
    }
    public withStartTime(startTime: number): ListRaspEventsRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): number | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: number): ListRaspEventsRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): number | undefined {
        return this['end_time'];
    }
    public withAppType(appType: string): ListRaspEventsRequest {
        this['app_type'] = appType;
        return this;
    }
    public set appType(appType: string  | undefined) {
        this['app_type'] = appType;
    }
    public get appType(): string | undefined {
        return this['app_type'];
    }
    public withSeverity(severity: string): ListRaspEventsRequest {
        this['severity'] = severity;
        return this;
    }
    public withAttackTag(attackTag: string): ListRaspEventsRequest {
        this['attack_tag'] = attackTag;
        return this;
    }
    public set attackTag(attackTag: string  | undefined) {
        this['attack_tag'] = attackTag;
    }
    public get attackTag(): string | undefined {
        return this['attack_tag'];
    }
    public withProtectStatus(protectStatus: string): ListRaspEventsRequest {
        this['protect_status'] = protectStatus;
        return this;
    }
    public set protectStatus(protectStatus: string  | undefined) {
        this['protect_status'] = protectStatus;
    }
    public get protectStatus(): string | undefined {
        return this['protect_status'];
    }
}