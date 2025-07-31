

export class ListAppWhitelistHostStatusRequest {
    private 'enterprise_project_id'?: string;
    public offset?: number;
    public limit?: number;
    private 'host_id'?: string;
    private 'host_name'?: string;
    public version?: string;
    private 'private_ip'?: string;
    private 'public_ip'?: string;
    private 'policy_id'?: string;
    private 'group_id'?: string;
    public constructor(offset?: number, limit?: number) { 
        this['offset'] = offset;
        this['limit'] = limit;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListAppWhitelistHostStatusRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withOffset(offset: number): ListAppWhitelistHostStatusRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListAppWhitelistHostStatusRequest {
        this['limit'] = limit;
        return this;
    }
    public withHostId(hostId: string): ListAppWhitelistHostStatusRequest {
        this['host_id'] = hostId;
        return this;
    }
    public set hostId(hostId: string  | undefined) {
        this['host_id'] = hostId;
    }
    public get hostId(): string | undefined {
        return this['host_id'];
    }
    public withHostName(hostName: string): ListAppWhitelistHostStatusRequest {
        this['host_name'] = hostName;
        return this;
    }
    public set hostName(hostName: string  | undefined) {
        this['host_name'] = hostName;
    }
    public get hostName(): string | undefined {
        return this['host_name'];
    }
    public withVersion(version: string): ListAppWhitelistHostStatusRequest {
        this['version'] = version;
        return this;
    }
    public withPrivateIp(privateIp: string): ListAppWhitelistHostStatusRequest {
        this['private_ip'] = privateIp;
        return this;
    }
    public set privateIp(privateIp: string  | undefined) {
        this['private_ip'] = privateIp;
    }
    public get privateIp(): string | undefined {
        return this['private_ip'];
    }
    public withPublicIp(publicIp: string): ListAppWhitelistHostStatusRequest {
        this['public_ip'] = publicIp;
        return this;
    }
    public set publicIp(publicIp: string  | undefined) {
        this['public_ip'] = publicIp;
    }
    public get publicIp(): string | undefined {
        return this['public_ip'];
    }
    public withPolicyId(policyId: string): ListAppWhitelistHostStatusRequest {
        this['policy_id'] = policyId;
        return this;
    }
    public set policyId(policyId: string  | undefined) {
        this['policy_id'] = policyId;
    }
    public get policyId(): string | undefined {
        return this['policy_id'];
    }
    public withGroupId(groupId: string): ListAppWhitelistHostStatusRequest {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
}