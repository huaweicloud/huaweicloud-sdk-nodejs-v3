

export class ListHoneypotEventsRequest {
    private 'enterprise_project_id'?: string;
    public offset?: number;
    public limit?: number;
    private 'begin_time'?: number;
    private 'end_time'?: number;
    private 'last_days'?: number;
    private 'host_name'?: string;
    private 'host_id'?: string;
    private 'public_ip'?: string;
    private 'private_ip'?: string;
    public severity?: string;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListHoneypotEventsRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withOffset(offset: number): ListHoneypotEventsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListHoneypotEventsRequest {
        this['limit'] = limit;
        return this;
    }
    public withBeginTime(beginTime: number): ListHoneypotEventsRequest {
        this['begin_time'] = beginTime;
        return this;
    }
    public set beginTime(beginTime: number  | undefined) {
        this['begin_time'] = beginTime;
    }
    public get beginTime(): number | undefined {
        return this['begin_time'];
    }
    public withEndTime(endTime: number): ListHoneypotEventsRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): number | undefined {
        return this['end_time'];
    }
    public withLastDays(lastDays: number): ListHoneypotEventsRequest {
        this['last_days'] = lastDays;
        return this;
    }
    public set lastDays(lastDays: number  | undefined) {
        this['last_days'] = lastDays;
    }
    public get lastDays(): number | undefined {
        return this['last_days'];
    }
    public withHostName(hostName: string): ListHoneypotEventsRequest {
        this['host_name'] = hostName;
        return this;
    }
    public set hostName(hostName: string  | undefined) {
        this['host_name'] = hostName;
    }
    public get hostName(): string | undefined {
        return this['host_name'];
    }
    public withHostId(hostId: string): ListHoneypotEventsRequest {
        this['host_id'] = hostId;
        return this;
    }
    public set hostId(hostId: string  | undefined) {
        this['host_id'] = hostId;
    }
    public get hostId(): string | undefined {
        return this['host_id'];
    }
    public withPublicIp(publicIp: string): ListHoneypotEventsRequest {
        this['public_ip'] = publicIp;
        return this;
    }
    public set publicIp(publicIp: string  | undefined) {
        this['public_ip'] = publicIp;
    }
    public get publicIp(): string | undefined {
        return this['public_ip'];
    }
    public withPrivateIp(privateIp: string): ListHoneypotEventsRequest {
        this['private_ip'] = privateIp;
        return this;
    }
    public set privateIp(privateIp: string  | undefined) {
        this['private_ip'] = privateIp;
    }
    public get privateIp(): string | undefined {
        return this['private_ip'];
    }
    public withSeverity(severity: string): ListHoneypotEventsRequest {
        this['severity'] = severity;
        return this;
    }
}