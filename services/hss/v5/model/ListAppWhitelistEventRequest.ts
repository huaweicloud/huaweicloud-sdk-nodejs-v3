

export class ListAppWhitelistEventRequest {
    private 'enterprise_project_id'?: string;
    private 'last_days'?: number;
    private 'begin_time'?: number;
    private 'end_time'?: number;
    private 'host_name'?: string;
    private 'host_ip'?: string;
    private 'handle_status'?: string;
    public offset?: number;
    public limit?: number;
    public constructor(beginTime?: number, endTime?: number, offset?: number, limit?: number) { 
        this['begin_time'] = beginTime;
        this['end_time'] = endTime;
        this['offset'] = offset;
        this['limit'] = limit;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListAppWhitelistEventRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withLastDays(lastDays: number): ListAppWhitelistEventRequest {
        this['last_days'] = lastDays;
        return this;
    }
    public set lastDays(lastDays: number  | undefined) {
        this['last_days'] = lastDays;
    }
    public get lastDays(): number | undefined {
        return this['last_days'];
    }
    public withBeginTime(beginTime: number): ListAppWhitelistEventRequest {
        this['begin_time'] = beginTime;
        return this;
    }
    public set beginTime(beginTime: number  | undefined) {
        this['begin_time'] = beginTime;
    }
    public get beginTime(): number | undefined {
        return this['begin_time'];
    }
    public withEndTime(endTime: number): ListAppWhitelistEventRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): number | undefined {
        return this['end_time'];
    }
    public withHostName(hostName: string): ListAppWhitelistEventRequest {
        this['host_name'] = hostName;
        return this;
    }
    public set hostName(hostName: string  | undefined) {
        this['host_name'] = hostName;
    }
    public get hostName(): string | undefined {
        return this['host_name'];
    }
    public withHostIp(hostIp: string): ListAppWhitelistEventRequest {
        this['host_ip'] = hostIp;
        return this;
    }
    public set hostIp(hostIp: string  | undefined) {
        this['host_ip'] = hostIp;
    }
    public get hostIp(): string | undefined {
        return this['host_ip'];
    }
    public withHandleStatus(handleStatus: string): ListAppWhitelistEventRequest {
        this['handle_status'] = handleStatus;
        return this;
    }
    public set handleStatus(handleStatus: string  | undefined) {
        this['handle_status'] = handleStatus;
    }
    public get handleStatus(): string | undefined {
        return this['handle_status'];
    }
    public withOffset(offset: number): ListAppWhitelistEventRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListAppWhitelistEventRequest {
        this['limit'] = limit;
        return this;
    }
}