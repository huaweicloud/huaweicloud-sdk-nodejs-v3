

export class ListWtpProtectHostRequest {
    public region?: string;
    private 'enterprise_project_id'?: string;
    private 'host_name'?: string;
    private 'host_id'?: string;
    private 'public_ip'?: string;
    private 'private_ip'?: string;
    private 'group_name'?: string;
    private 'os_type'?: string;
    private 'protect_status'?: string;
    private 'agent_status'?: string;
    public limit?: number;
    public offset?: number;
    public constructor(region?: string) { 
        this['region'] = region;
    }
    public withRegion(region: string): ListWtpProtectHostRequest {
        this['region'] = region;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListWtpProtectHostRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withHostName(hostName: string): ListWtpProtectHostRequest {
        this['host_name'] = hostName;
        return this;
    }
    public set hostName(hostName: string  | undefined) {
        this['host_name'] = hostName;
    }
    public get hostName(): string | undefined {
        return this['host_name'];
    }
    public withHostId(hostId: string): ListWtpProtectHostRequest {
        this['host_id'] = hostId;
        return this;
    }
    public set hostId(hostId: string  | undefined) {
        this['host_id'] = hostId;
    }
    public get hostId(): string | undefined {
        return this['host_id'];
    }
    public withPublicIp(publicIp: string): ListWtpProtectHostRequest {
        this['public_ip'] = publicIp;
        return this;
    }
    public set publicIp(publicIp: string  | undefined) {
        this['public_ip'] = publicIp;
    }
    public get publicIp(): string | undefined {
        return this['public_ip'];
    }
    public withPrivateIp(privateIp: string): ListWtpProtectHostRequest {
        this['private_ip'] = privateIp;
        return this;
    }
    public set privateIp(privateIp: string  | undefined) {
        this['private_ip'] = privateIp;
    }
    public get privateIp(): string | undefined {
        return this['private_ip'];
    }
    public withGroupName(groupName: string): ListWtpProtectHostRequest {
        this['group_name'] = groupName;
        return this;
    }
    public set groupName(groupName: string  | undefined) {
        this['group_name'] = groupName;
    }
    public get groupName(): string | undefined {
        return this['group_name'];
    }
    public withOsType(osType: string): ListWtpProtectHostRequest {
        this['os_type'] = osType;
        return this;
    }
    public set osType(osType: string  | undefined) {
        this['os_type'] = osType;
    }
    public get osType(): string | undefined {
        return this['os_type'];
    }
    public withProtectStatus(protectStatus: string): ListWtpProtectHostRequest {
        this['protect_status'] = protectStatus;
        return this;
    }
    public set protectStatus(protectStatus: string  | undefined) {
        this['protect_status'] = protectStatus;
    }
    public get protectStatus(): string | undefined {
        return this['protect_status'];
    }
    public withAgentStatus(agentStatus: string): ListWtpProtectHostRequest {
        this['agent_status'] = agentStatus;
        return this;
    }
    public set agentStatus(agentStatus: string  | undefined) {
        this['agent_status'] = agentStatus;
    }
    public get agentStatus(): string | undefined {
        return this['agent_status'];
    }
    public withLimit(limit: number): ListWtpProtectHostRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListWtpProtectHostRequest {
        this['offset'] = offset;
        return this;
    }
}