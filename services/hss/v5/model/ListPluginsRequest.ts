

export class ListPluginsRequest {
    private 'enterprise_project_id'?: string;
    private 'host_name'?: string;
    private 'host_id'?: string;
    private 'private_ip'?: string;
    private 'public_ip'?: string;
    private 'group_id'?: string;
    private 'asset_value'?: string;
    public limit?: number;
    public offset?: number;
    private 'agent_status'?: string;
    private 'detect_result'?: string;
    private 'host_status'?: string;
    private 'os_type'?: string;
    private 'ip_addr'?: string;
    private 'protect_status'?: string;
    private 'group_name'?: string;
    private 'policy_group_id'?: string;
    private 'policy_group_name'?: string;
    public label?: string;
    private 'charging_mode'?: string;
    public refresh?: boolean;
    private 'above_version'?: boolean;
    public name?: string;
    public version?: string;
    public plugin?: string;
    private 'outside_host'?: boolean;
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListPluginsRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withHostName(hostName: string): ListPluginsRequest {
        this['host_name'] = hostName;
        return this;
    }
    public set hostName(hostName: string  | undefined) {
        this['host_name'] = hostName;
    }
    public get hostName(): string | undefined {
        return this['host_name'];
    }
    public withHostId(hostId: string): ListPluginsRequest {
        this['host_id'] = hostId;
        return this;
    }
    public set hostId(hostId: string  | undefined) {
        this['host_id'] = hostId;
    }
    public get hostId(): string | undefined {
        return this['host_id'];
    }
    public withPrivateIp(privateIp: string): ListPluginsRequest {
        this['private_ip'] = privateIp;
        return this;
    }
    public set privateIp(privateIp: string  | undefined) {
        this['private_ip'] = privateIp;
    }
    public get privateIp(): string | undefined {
        return this['private_ip'];
    }
    public withPublicIp(publicIp: string): ListPluginsRequest {
        this['public_ip'] = publicIp;
        return this;
    }
    public set publicIp(publicIp: string  | undefined) {
        this['public_ip'] = publicIp;
    }
    public get publicIp(): string | undefined {
        return this['public_ip'];
    }
    public withGroupId(groupId: string): ListPluginsRequest {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withAssetValue(assetValue: string): ListPluginsRequest {
        this['asset_value'] = assetValue;
        return this;
    }
    public set assetValue(assetValue: string  | undefined) {
        this['asset_value'] = assetValue;
    }
    public get assetValue(): string | undefined {
        return this['asset_value'];
    }
    public withLimit(limit: number): ListPluginsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListPluginsRequest {
        this['offset'] = offset;
        return this;
    }
    public withAgentStatus(agentStatus: string): ListPluginsRequest {
        this['agent_status'] = agentStatus;
        return this;
    }
    public set agentStatus(agentStatus: string  | undefined) {
        this['agent_status'] = agentStatus;
    }
    public get agentStatus(): string | undefined {
        return this['agent_status'];
    }
    public withDetectResult(detectResult: string): ListPluginsRequest {
        this['detect_result'] = detectResult;
        return this;
    }
    public set detectResult(detectResult: string  | undefined) {
        this['detect_result'] = detectResult;
    }
    public get detectResult(): string | undefined {
        return this['detect_result'];
    }
    public withHostStatus(hostStatus: string): ListPluginsRequest {
        this['host_status'] = hostStatus;
        return this;
    }
    public set hostStatus(hostStatus: string  | undefined) {
        this['host_status'] = hostStatus;
    }
    public get hostStatus(): string | undefined {
        return this['host_status'];
    }
    public withOsType(osType: string): ListPluginsRequest {
        this['os_type'] = osType;
        return this;
    }
    public set osType(osType: string  | undefined) {
        this['os_type'] = osType;
    }
    public get osType(): string | undefined {
        return this['os_type'];
    }
    public withIpAddr(ipAddr: string): ListPluginsRequest {
        this['ip_addr'] = ipAddr;
        return this;
    }
    public set ipAddr(ipAddr: string  | undefined) {
        this['ip_addr'] = ipAddr;
    }
    public get ipAddr(): string | undefined {
        return this['ip_addr'];
    }
    public withProtectStatus(protectStatus: string): ListPluginsRequest {
        this['protect_status'] = protectStatus;
        return this;
    }
    public set protectStatus(protectStatus: string  | undefined) {
        this['protect_status'] = protectStatus;
    }
    public get protectStatus(): string | undefined {
        return this['protect_status'];
    }
    public withGroupName(groupName: string): ListPluginsRequest {
        this['group_name'] = groupName;
        return this;
    }
    public set groupName(groupName: string  | undefined) {
        this['group_name'] = groupName;
    }
    public get groupName(): string | undefined {
        return this['group_name'];
    }
    public withPolicyGroupId(policyGroupId: string): ListPluginsRequest {
        this['policy_group_id'] = policyGroupId;
        return this;
    }
    public set policyGroupId(policyGroupId: string  | undefined) {
        this['policy_group_id'] = policyGroupId;
    }
    public get policyGroupId(): string | undefined {
        return this['policy_group_id'];
    }
    public withPolicyGroupName(policyGroupName: string): ListPluginsRequest {
        this['policy_group_name'] = policyGroupName;
        return this;
    }
    public set policyGroupName(policyGroupName: string  | undefined) {
        this['policy_group_name'] = policyGroupName;
    }
    public get policyGroupName(): string | undefined {
        return this['policy_group_name'];
    }
    public withLabel(label: string): ListPluginsRequest {
        this['label'] = label;
        return this;
    }
    public withChargingMode(chargingMode: string): ListPluginsRequest {
        this['charging_mode'] = chargingMode;
        return this;
    }
    public set chargingMode(chargingMode: string  | undefined) {
        this['charging_mode'] = chargingMode;
    }
    public get chargingMode(): string | undefined {
        return this['charging_mode'];
    }
    public withRefresh(refresh: boolean): ListPluginsRequest {
        this['refresh'] = refresh;
        return this;
    }
    public withAboveVersion(aboveVersion: boolean): ListPluginsRequest {
        this['above_version'] = aboveVersion;
        return this;
    }
    public set aboveVersion(aboveVersion: boolean  | undefined) {
        this['above_version'] = aboveVersion;
    }
    public get aboveVersion(): boolean | undefined {
        return this['above_version'];
    }
    public withName(name: string): ListPluginsRequest {
        this['name'] = name;
        return this;
    }
    public withVersion(version: string): ListPluginsRequest {
        this['version'] = version;
        return this;
    }
    public withPlugin(plugin: string): ListPluginsRequest {
        this['plugin'] = plugin;
        return this;
    }
    public withOutsideHost(outsideHost: boolean): ListPluginsRequest {
        this['outside_host'] = outsideHost;
        return this;
    }
    public set outsideHost(outsideHost: boolean  | undefined) {
        this['outside_host'] = outsideHost;
    }
    public get outsideHost(): boolean | undefined {
        return this['outside_host'];
    }
}