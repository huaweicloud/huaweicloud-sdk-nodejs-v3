

export class ListRansomwareProtectionNodesRequest {
    private 'enterprise_project_id'?: string;
    public offset?: number;
    public limit?: number;
    private 'host_name'?: string;
    private 'host_id'?: string;
    private 'os_type'?: string;
    private 'host_ip'?: string;
    private 'private_ip'?: string;
    private 'host_status'?: string;
    private 'ransom_protection_status'?: string;
    private 'protect_policy_name'?: string;
    private 'policy_name'?: string;
    private 'policy_id'?: string;
    private 'agent_status'?: string;
    private 'group_id'?: string;
    private 'group_name'?: string;
    private 'last_days'?: number;
    public constructor(offset?: number, limit?: number) { 
        this['offset'] = offset;
        this['limit'] = limit;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListRansomwareProtectionNodesRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withOffset(offset: number): ListRansomwareProtectionNodesRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListRansomwareProtectionNodesRequest {
        this['limit'] = limit;
        return this;
    }
    public withHostName(hostName: string): ListRansomwareProtectionNodesRequest {
        this['host_name'] = hostName;
        return this;
    }
    public set hostName(hostName: string  | undefined) {
        this['host_name'] = hostName;
    }
    public get hostName(): string | undefined {
        return this['host_name'];
    }
    public withHostId(hostId: string): ListRansomwareProtectionNodesRequest {
        this['host_id'] = hostId;
        return this;
    }
    public set hostId(hostId: string  | undefined) {
        this['host_id'] = hostId;
    }
    public get hostId(): string | undefined {
        return this['host_id'];
    }
    public withOsType(osType: string): ListRansomwareProtectionNodesRequest {
        this['os_type'] = osType;
        return this;
    }
    public set osType(osType: string  | undefined) {
        this['os_type'] = osType;
    }
    public get osType(): string | undefined {
        return this['os_type'];
    }
    public withHostIp(hostIp: string): ListRansomwareProtectionNodesRequest {
        this['host_ip'] = hostIp;
        return this;
    }
    public set hostIp(hostIp: string  | undefined) {
        this['host_ip'] = hostIp;
    }
    public get hostIp(): string | undefined {
        return this['host_ip'];
    }
    public withPrivateIp(privateIp: string): ListRansomwareProtectionNodesRequest {
        this['private_ip'] = privateIp;
        return this;
    }
    public set privateIp(privateIp: string  | undefined) {
        this['private_ip'] = privateIp;
    }
    public get privateIp(): string | undefined {
        return this['private_ip'];
    }
    public withHostStatus(hostStatus: string): ListRansomwareProtectionNodesRequest {
        this['host_status'] = hostStatus;
        return this;
    }
    public set hostStatus(hostStatus: string  | undefined) {
        this['host_status'] = hostStatus;
    }
    public get hostStatus(): string | undefined {
        return this['host_status'];
    }
    public withRansomProtectionStatus(ransomProtectionStatus: string): ListRansomwareProtectionNodesRequest {
        this['ransom_protection_status'] = ransomProtectionStatus;
        return this;
    }
    public set ransomProtectionStatus(ransomProtectionStatus: string  | undefined) {
        this['ransom_protection_status'] = ransomProtectionStatus;
    }
    public get ransomProtectionStatus(): string | undefined {
        return this['ransom_protection_status'];
    }
    public withProtectPolicyName(protectPolicyName: string): ListRansomwareProtectionNodesRequest {
        this['protect_policy_name'] = protectPolicyName;
        return this;
    }
    public set protectPolicyName(protectPolicyName: string  | undefined) {
        this['protect_policy_name'] = protectPolicyName;
    }
    public get protectPolicyName(): string | undefined {
        return this['protect_policy_name'];
    }
    public withPolicyName(policyName: string): ListRansomwareProtectionNodesRequest {
        this['policy_name'] = policyName;
        return this;
    }
    public set policyName(policyName: string  | undefined) {
        this['policy_name'] = policyName;
    }
    public get policyName(): string | undefined {
        return this['policy_name'];
    }
    public withPolicyId(policyId: string): ListRansomwareProtectionNodesRequest {
        this['policy_id'] = policyId;
        return this;
    }
    public set policyId(policyId: string  | undefined) {
        this['policy_id'] = policyId;
    }
    public get policyId(): string | undefined {
        return this['policy_id'];
    }
    public withAgentStatus(agentStatus: string): ListRansomwareProtectionNodesRequest {
        this['agent_status'] = agentStatus;
        return this;
    }
    public set agentStatus(agentStatus: string  | undefined) {
        this['agent_status'] = agentStatus;
    }
    public get agentStatus(): string | undefined {
        return this['agent_status'];
    }
    public withGroupId(groupId: string): ListRansomwareProtectionNodesRequest {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withGroupName(groupName: string): ListRansomwareProtectionNodesRequest {
        this['group_name'] = groupName;
        return this;
    }
    public set groupName(groupName: string  | undefined) {
        this['group_name'] = groupName;
    }
    public get groupName(): string | undefined {
        return this['group_name'];
    }
    public withLastDays(lastDays: number): ListRansomwareProtectionNodesRequest {
        this['last_days'] = lastDays;
        return this;
    }
    public set lastDays(lastDays: number  | undefined) {
        this['last_days'] = lastDays;
    }
    public get lastDays(): number | undefined {
        return this['last_days'];
    }
}