

export class IgnoreHostResponseInfo {
    private 'agent_id'?: string;
    private 'host_id'?: string;
    private 'host_name'?: string;
    private 'private_ip'?: string;
    private 'public_ip'?: string;
    private 'os_name'?: string;
    private 'os_type'?: string;
    private 'host_status'?: string;
    private 'agent_status'?: string;
    private 'agent_version'?: string;
    private 'group_id'?: string;
    private 'group_name'?: string;
    private 'asset_value'?: string;
    private 'enterprise_project_id'?: string;
    private 'enterprise_project_name'?: string;
    private 'os_bit'?: string;
    private 'os_version'?: string;
    private 'protect_status'?: string;
    private 'detect_result'?: string;
    private 'charging_mode'?: string;
    private 'resource_id'?: string;
    private 'policy_group_id'?: string;
    private 'policy_group_name'?: string;
    private 'expire_time'?: number;
    private 'open_time'?: number;
    private 'agent_create_time'?: number;
    private 'agent_update_time'?: number;
    public upgradable?: boolean;
    private 'outside_host'?: boolean;
    private 'container_type'?: string;
    private 'wtp_protect_status'?: string;
    public constructor() { 
    }
    public withAgentId(agentId: string): IgnoreHostResponseInfo {
        this['agent_id'] = agentId;
        return this;
    }
    public set agentId(agentId: string  | undefined) {
        this['agent_id'] = agentId;
    }
    public get agentId(): string | undefined {
        return this['agent_id'];
    }
    public withHostId(hostId: string): IgnoreHostResponseInfo {
        this['host_id'] = hostId;
        return this;
    }
    public set hostId(hostId: string  | undefined) {
        this['host_id'] = hostId;
    }
    public get hostId(): string | undefined {
        return this['host_id'];
    }
    public withHostName(hostName: string): IgnoreHostResponseInfo {
        this['host_name'] = hostName;
        return this;
    }
    public set hostName(hostName: string  | undefined) {
        this['host_name'] = hostName;
    }
    public get hostName(): string | undefined {
        return this['host_name'];
    }
    public withPrivateIp(privateIp: string): IgnoreHostResponseInfo {
        this['private_ip'] = privateIp;
        return this;
    }
    public set privateIp(privateIp: string  | undefined) {
        this['private_ip'] = privateIp;
    }
    public get privateIp(): string | undefined {
        return this['private_ip'];
    }
    public withPublicIp(publicIp: string): IgnoreHostResponseInfo {
        this['public_ip'] = publicIp;
        return this;
    }
    public set publicIp(publicIp: string  | undefined) {
        this['public_ip'] = publicIp;
    }
    public get publicIp(): string | undefined {
        return this['public_ip'];
    }
    public withOsName(osName: string): IgnoreHostResponseInfo {
        this['os_name'] = osName;
        return this;
    }
    public set osName(osName: string  | undefined) {
        this['os_name'] = osName;
    }
    public get osName(): string | undefined {
        return this['os_name'];
    }
    public withOsType(osType: string): IgnoreHostResponseInfo {
        this['os_type'] = osType;
        return this;
    }
    public set osType(osType: string  | undefined) {
        this['os_type'] = osType;
    }
    public get osType(): string | undefined {
        return this['os_type'];
    }
    public withHostStatus(hostStatus: string): IgnoreHostResponseInfo {
        this['host_status'] = hostStatus;
        return this;
    }
    public set hostStatus(hostStatus: string  | undefined) {
        this['host_status'] = hostStatus;
    }
    public get hostStatus(): string | undefined {
        return this['host_status'];
    }
    public withAgentStatus(agentStatus: string): IgnoreHostResponseInfo {
        this['agent_status'] = agentStatus;
        return this;
    }
    public set agentStatus(agentStatus: string  | undefined) {
        this['agent_status'] = agentStatus;
    }
    public get agentStatus(): string | undefined {
        return this['agent_status'];
    }
    public withAgentVersion(agentVersion: string): IgnoreHostResponseInfo {
        this['agent_version'] = agentVersion;
        return this;
    }
    public set agentVersion(agentVersion: string  | undefined) {
        this['agent_version'] = agentVersion;
    }
    public get agentVersion(): string | undefined {
        return this['agent_version'];
    }
    public withGroupId(groupId: string): IgnoreHostResponseInfo {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withGroupName(groupName: string): IgnoreHostResponseInfo {
        this['group_name'] = groupName;
        return this;
    }
    public set groupName(groupName: string  | undefined) {
        this['group_name'] = groupName;
    }
    public get groupName(): string | undefined {
        return this['group_name'];
    }
    public withAssetValue(assetValue: string): IgnoreHostResponseInfo {
        this['asset_value'] = assetValue;
        return this;
    }
    public set assetValue(assetValue: string  | undefined) {
        this['asset_value'] = assetValue;
    }
    public get assetValue(): string | undefined {
        return this['asset_value'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): IgnoreHostResponseInfo {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withEnterpriseProjectName(enterpriseProjectName: string): IgnoreHostResponseInfo {
        this['enterprise_project_name'] = enterpriseProjectName;
        return this;
    }
    public set enterpriseProjectName(enterpriseProjectName: string  | undefined) {
        this['enterprise_project_name'] = enterpriseProjectName;
    }
    public get enterpriseProjectName(): string | undefined {
        return this['enterprise_project_name'];
    }
    public withOsBit(osBit: string): IgnoreHostResponseInfo {
        this['os_bit'] = osBit;
        return this;
    }
    public set osBit(osBit: string  | undefined) {
        this['os_bit'] = osBit;
    }
    public get osBit(): string | undefined {
        return this['os_bit'];
    }
    public withOsVersion(osVersion: string): IgnoreHostResponseInfo {
        this['os_version'] = osVersion;
        return this;
    }
    public set osVersion(osVersion: string  | undefined) {
        this['os_version'] = osVersion;
    }
    public get osVersion(): string | undefined {
        return this['os_version'];
    }
    public withProtectStatus(protectStatus: string): IgnoreHostResponseInfo {
        this['protect_status'] = protectStatus;
        return this;
    }
    public set protectStatus(protectStatus: string  | undefined) {
        this['protect_status'] = protectStatus;
    }
    public get protectStatus(): string | undefined {
        return this['protect_status'];
    }
    public withDetectResult(detectResult: string): IgnoreHostResponseInfo {
        this['detect_result'] = detectResult;
        return this;
    }
    public set detectResult(detectResult: string  | undefined) {
        this['detect_result'] = detectResult;
    }
    public get detectResult(): string | undefined {
        return this['detect_result'];
    }
    public withChargingMode(chargingMode: string): IgnoreHostResponseInfo {
        this['charging_mode'] = chargingMode;
        return this;
    }
    public set chargingMode(chargingMode: string  | undefined) {
        this['charging_mode'] = chargingMode;
    }
    public get chargingMode(): string | undefined {
        return this['charging_mode'];
    }
    public withResourceId(resourceId: string): IgnoreHostResponseInfo {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withPolicyGroupId(policyGroupId: string): IgnoreHostResponseInfo {
        this['policy_group_id'] = policyGroupId;
        return this;
    }
    public set policyGroupId(policyGroupId: string  | undefined) {
        this['policy_group_id'] = policyGroupId;
    }
    public get policyGroupId(): string | undefined {
        return this['policy_group_id'];
    }
    public withPolicyGroupName(policyGroupName: string): IgnoreHostResponseInfo {
        this['policy_group_name'] = policyGroupName;
        return this;
    }
    public set policyGroupName(policyGroupName: string  | undefined) {
        this['policy_group_name'] = policyGroupName;
    }
    public get policyGroupName(): string | undefined {
        return this['policy_group_name'];
    }
    public withExpireTime(expireTime: number): IgnoreHostResponseInfo {
        this['expire_time'] = expireTime;
        return this;
    }
    public set expireTime(expireTime: number  | undefined) {
        this['expire_time'] = expireTime;
    }
    public get expireTime(): number | undefined {
        return this['expire_time'];
    }
    public withOpenTime(openTime: number): IgnoreHostResponseInfo {
        this['open_time'] = openTime;
        return this;
    }
    public set openTime(openTime: number  | undefined) {
        this['open_time'] = openTime;
    }
    public get openTime(): number | undefined {
        return this['open_time'];
    }
    public withAgentCreateTime(agentCreateTime: number): IgnoreHostResponseInfo {
        this['agent_create_time'] = agentCreateTime;
        return this;
    }
    public set agentCreateTime(agentCreateTime: number  | undefined) {
        this['agent_create_time'] = agentCreateTime;
    }
    public get agentCreateTime(): number | undefined {
        return this['agent_create_time'];
    }
    public withAgentUpdateTime(agentUpdateTime: number): IgnoreHostResponseInfo {
        this['agent_update_time'] = agentUpdateTime;
        return this;
    }
    public set agentUpdateTime(agentUpdateTime: number  | undefined) {
        this['agent_update_time'] = agentUpdateTime;
    }
    public get agentUpdateTime(): number | undefined {
        return this['agent_update_time'];
    }
    public withUpgradable(upgradable: boolean): IgnoreHostResponseInfo {
        this['upgradable'] = upgradable;
        return this;
    }
    public withOutsideHost(outsideHost: boolean): IgnoreHostResponseInfo {
        this['outside_host'] = outsideHost;
        return this;
    }
    public set outsideHost(outsideHost: boolean  | undefined) {
        this['outside_host'] = outsideHost;
    }
    public get outsideHost(): boolean | undefined {
        return this['outside_host'];
    }
    public withContainerType(containerType: string): IgnoreHostResponseInfo {
        this['container_type'] = containerType;
        return this;
    }
    public set containerType(containerType: string  | undefined) {
        this['container_type'] = containerType;
    }
    public get containerType(): string | undefined {
        return this['container_type'];
    }
    public withWtpProtectStatus(wtpProtectStatus: string): IgnoreHostResponseInfo {
        this['wtp_protect_status'] = wtpProtectStatus;
        return this;
    }
    public set wtpProtectStatus(wtpProtectStatus: string  | undefined) {
        this['wtp_protect_status'] = wtpProtectStatus;
    }
    public get wtpProtectStatus(): string | undefined {
        return this['wtp_protect_status'];
    }
}