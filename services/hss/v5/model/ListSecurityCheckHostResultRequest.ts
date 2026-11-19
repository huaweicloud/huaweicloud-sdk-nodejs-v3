

export class ListSecurityCheckHostResultRequest {
    private 'enterprise_project_id'?: string;
    public limit?: number;
    public offset?: number;
    private 'host_name'?: string;
    private 'host_ip'?: string;
    private 'os_type'?: string;
    public severity?: string;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListSecurityCheckHostResultRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withLimit(limit: number): ListSecurityCheckHostResultRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListSecurityCheckHostResultRequest {
        this['offset'] = offset;
        return this;
    }
    public withHostName(hostName: string): ListSecurityCheckHostResultRequest {
        this['host_name'] = hostName;
        return this;
    }
    public set hostName(hostName: string  | undefined) {
        this['host_name'] = hostName;
    }
    public get hostName(): string | undefined {
        return this['host_name'];
    }
    public withHostIp(hostIp: string): ListSecurityCheckHostResultRequest {
        this['host_ip'] = hostIp;
        return this;
    }
    public set hostIp(hostIp: string  | undefined) {
        this['host_ip'] = hostIp;
    }
    public get hostIp(): string | undefined {
        return this['host_ip'];
    }
    public withOsType(osType: string): ListSecurityCheckHostResultRequest {
        this['os_type'] = osType;
        return this;
    }
    public set osType(osType: string  | undefined) {
        this['os_type'] = osType;
    }
    public get osType(): string | undefined {
        return this['os_type'];
    }
    public withSeverity(severity: string): ListSecurityCheckHostResultRequest {
        this['severity'] = severity;
        return this;
    }
}