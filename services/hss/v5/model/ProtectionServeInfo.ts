

export class ProtectionServeInfo {
    private 'host_id'?: string;
    private 'agent_id'?: string;
    private 'agent_version'?: string;
    private 'host_name'?: string;
    private 'public_ip'?: string;
    private 'private_ip'?: string;
    private 'os_type'?: string;
    private 'rasp_status'?: string;
    private 'policy_name'?: string;
    private 'is_friendly_user'?: boolean;
    private 'agent_support_auto_attach'?: boolean;
    private 'agent_status'?: string;
    private 'auto_attach'?: boolean;
    private 'protect_status'?: string;
    private 'group_id'?: string;
    private 'group_name'?: string;
    private 'protect_event_num'?: number;
    private 'rasp_port'?: number;
    public constructor() { 
    }
    public withHostId(hostId: string): ProtectionServeInfo {
        this['host_id'] = hostId;
        return this;
    }
    public set hostId(hostId: string  | undefined) {
        this['host_id'] = hostId;
    }
    public get hostId(): string | undefined {
        return this['host_id'];
    }
    public withAgentId(agentId: string): ProtectionServeInfo {
        this['agent_id'] = agentId;
        return this;
    }
    public set agentId(agentId: string  | undefined) {
        this['agent_id'] = agentId;
    }
    public get agentId(): string | undefined {
        return this['agent_id'];
    }
    public withAgentVersion(agentVersion: string): ProtectionServeInfo {
        this['agent_version'] = agentVersion;
        return this;
    }
    public set agentVersion(agentVersion: string  | undefined) {
        this['agent_version'] = agentVersion;
    }
    public get agentVersion(): string | undefined {
        return this['agent_version'];
    }
    public withHostName(hostName: string): ProtectionServeInfo {
        this['host_name'] = hostName;
        return this;
    }
    public set hostName(hostName: string  | undefined) {
        this['host_name'] = hostName;
    }
    public get hostName(): string | undefined {
        return this['host_name'];
    }
    public withPublicIp(publicIp: string): ProtectionServeInfo {
        this['public_ip'] = publicIp;
        return this;
    }
    public set publicIp(publicIp: string  | undefined) {
        this['public_ip'] = publicIp;
    }
    public get publicIp(): string | undefined {
        return this['public_ip'];
    }
    public withPrivateIp(privateIp: string): ProtectionServeInfo {
        this['private_ip'] = privateIp;
        return this;
    }
    public set privateIp(privateIp: string  | undefined) {
        this['private_ip'] = privateIp;
    }
    public get privateIp(): string | undefined {
        return this['private_ip'];
    }
    public withOsType(osType: string): ProtectionServeInfo {
        this['os_type'] = osType;
        return this;
    }
    public set osType(osType: string  | undefined) {
        this['os_type'] = osType;
    }
    public get osType(): string | undefined {
        return this['os_type'];
    }
    public withRaspStatus(raspStatus: string): ProtectionServeInfo {
        this['rasp_status'] = raspStatus;
        return this;
    }
    public set raspStatus(raspStatus: string  | undefined) {
        this['rasp_status'] = raspStatus;
    }
    public get raspStatus(): string | undefined {
        return this['rasp_status'];
    }
    public withPolicyName(policyName: string): ProtectionServeInfo {
        this['policy_name'] = policyName;
        return this;
    }
    public set policyName(policyName: string  | undefined) {
        this['policy_name'] = policyName;
    }
    public get policyName(): string | undefined {
        return this['policy_name'];
    }
    public withIsFriendlyUser(isFriendlyUser: boolean): ProtectionServeInfo {
        this['is_friendly_user'] = isFriendlyUser;
        return this;
    }
    public set isFriendlyUser(isFriendlyUser: boolean  | undefined) {
        this['is_friendly_user'] = isFriendlyUser;
    }
    public get isFriendlyUser(): boolean | undefined {
        return this['is_friendly_user'];
    }
    public withAgentSupportAutoAttach(agentSupportAutoAttach: boolean): ProtectionServeInfo {
        this['agent_support_auto_attach'] = agentSupportAutoAttach;
        return this;
    }
    public set agentSupportAutoAttach(agentSupportAutoAttach: boolean  | undefined) {
        this['agent_support_auto_attach'] = agentSupportAutoAttach;
    }
    public get agentSupportAutoAttach(): boolean | undefined {
        return this['agent_support_auto_attach'];
    }
    public withAgentStatus(agentStatus: string): ProtectionServeInfo {
        this['agent_status'] = agentStatus;
        return this;
    }
    public set agentStatus(agentStatus: string  | undefined) {
        this['agent_status'] = agentStatus;
    }
    public get agentStatus(): string | undefined {
        return this['agent_status'];
    }
    public withAutoAttach(autoAttach: boolean): ProtectionServeInfo {
        this['auto_attach'] = autoAttach;
        return this;
    }
    public set autoAttach(autoAttach: boolean  | undefined) {
        this['auto_attach'] = autoAttach;
    }
    public get autoAttach(): boolean | undefined {
        return this['auto_attach'];
    }
    public withProtectStatus(protectStatus: string): ProtectionServeInfo {
        this['protect_status'] = protectStatus;
        return this;
    }
    public set protectStatus(protectStatus: string  | undefined) {
        this['protect_status'] = protectStatus;
    }
    public get protectStatus(): string | undefined {
        return this['protect_status'];
    }
    public withGroupId(groupId: string): ProtectionServeInfo {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withGroupName(groupName: string): ProtectionServeInfo {
        this['group_name'] = groupName;
        return this;
    }
    public set groupName(groupName: string  | undefined) {
        this['group_name'] = groupName;
    }
    public get groupName(): string | undefined {
        return this['group_name'];
    }
    public withProtectEventNum(protectEventNum: number): ProtectionServeInfo {
        this['protect_event_num'] = protectEventNum;
        return this;
    }
    public set protectEventNum(protectEventNum: number  | undefined) {
        this['protect_event_num'] = protectEventNum;
    }
    public get protectEventNum(): number | undefined {
        return this['protect_event_num'];
    }
    public withRaspPort(raspPort: number): ProtectionServeInfo {
        this['rasp_port'] = raspPort;
        return this;
    }
    public set raspPort(raspPort: number  | undefined) {
        this['rasp_port'] = raspPort;
    }
    public get raspPort(): number | undefined {
        return this['rasp_port'];
    }
}