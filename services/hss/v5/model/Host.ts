

export class Host {
    private 'host_name'?: string;
    private 'host_id'?: string;
    private 'agent_id'?: string;
    private 'private_ip'?: string;
    private 'public_ip'?: string;
    private 'enterprise_project_id'?: string;
    private 'enterprise_project_name'?: string;
    private 'os_name'?: string;
    private 'os_version'?: string;
    private 'kernel_version'?: string;
    private 'host_status'?: string;
    private 'agent_status'?: string;
    private 'install_result_code'?: string;
    public version?: string;
    private 'protect_status'?: string;
    private 'os_image'?: string;
    private 'os_type'?: string;
    private 'os_bit'?: string;
    private 'detect_result'?: string;
    private 'expire_time'?: number;
    private 'charging_mode'?: string;
    private 'resource_id'?: string;
    private 'outside_host'?: boolean;
    private 'group_id'?: string;
    private 'group_name'?: string;
    private 'policy_group_id'?: string;
    private 'policy_group_name'?: string;
    public asset?: number;
    public vulnerability?: number;
    public baseline?: number;
    public intrusion?: number;
    private 'asset_value'?: string;
    public labels?: Array<string>;
    private 'agent_create_time'?: number;
    private 'agent_update_time'?: number;
    private 'agent_version'?: string;
    private 'upgrade_status'?: string;
    private 'upgrade_result_code'?: string;
    public upgradable?: boolean;
    private 'open_time'?: number;
    private 'protect_interrupt'?: boolean;
    private 'protect_degradation'?: boolean;
    private 'host_sources'?: HostHostSourcesEnum | string;
    private 'interrupt_reason'?: string;
    private 'degradation_reason'?: string;
    private 'key_name'?: string;
    private 'auto_open_version'?: string;
    private 'install_progress'?: number;
    private 'vpc_id'?: string;
    private 'common_login_area_codes'?: Array<number>;
    private 'cluster_name'?: string;
    private 'cluster_id'?: string;
    public constructor() { 
    }
    public withHostName(hostName: string): Host {
        this['host_name'] = hostName;
        return this;
    }
    public set hostName(hostName: string  | undefined) {
        this['host_name'] = hostName;
    }
    public get hostName(): string | undefined {
        return this['host_name'];
    }
    public withHostId(hostId: string): Host {
        this['host_id'] = hostId;
        return this;
    }
    public set hostId(hostId: string  | undefined) {
        this['host_id'] = hostId;
    }
    public get hostId(): string | undefined {
        return this['host_id'];
    }
    public withAgentId(agentId: string): Host {
        this['agent_id'] = agentId;
        return this;
    }
    public set agentId(agentId: string  | undefined) {
        this['agent_id'] = agentId;
    }
    public get agentId(): string | undefined {
        return this['agent_id'];
    }
    public withPrivateIp(privateIp: string): Host {
        this['private_ip'] = privateIp;
        return this;
    }
    public set privateIp(privateIp: string  | undefined) {
        this['private_ip'] = privateIp;
    }
    public get privateIp(): string | undefined {
        return this['private_ip'];
    }
    public withPublicIp(publicIp: string): Host {
        this['public_ip'] = publicIp;
        return this;
    }
    public set publicIp(publicIp: string  | undefined) {
        this['public_ip'] = publicIp;
    }
    public get publicIp(): string | undefined {
        return this['public_ip'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): Host {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withEnterpriseProjectName(enterpriseProjectName: string): Host {
        this['enterprise_project_name'] = enterpriseProjectName;
        return this;
    }
    public set enterpriseProjectName(enterpriseProjectName: string  | undefined) {
        this['enterprise_project_name'] = enterpriseProjectName;
    }
    public get enterpriseProjectName(): string | undefined {
        return this['enterprise_project_name'];
    }
    public withOsName(osName: string): Host {
        this['os_name'] = osName;
        return this;
    }
    public set osName(osName: string  | undefined) {
        this['os_name'] = osName;
    }
    public get osName(): string | undefined {
        return this['os_name'];
    }
    public withOsVersion(osVersion: string): Host {
        this['os_version'] = osVersion;
        return this;
    }
    public set osVersion(osVersion: string  | undefined) {
        this['os_version'] = osVersion;
    }
    public get osVersion(): string | undefined {
        return this['os_version'];
    }
    public withKernelVersion(kernelVersion: string): Host {
        this['kernel_version'] = kernelVersion;
        return this;
    }
    public set kernelVersion(kernelVersion: string  | undefined) {
        this['kernel_version'] = kernelVersion;
    }
    public get kernelVersion(): string | undefined {
        return this['kernel_version'];
    }
    public withHostStatus(hostStatus: string): Host {
        this['host_status'] = hostStatus;
        return this;
    }
    public set hostStatus(hostStatus: string  | undefined) {
        this['host_status'] = hostStatus;
    }
    public get hostStatus(): string | undefined {
        return this['host_status'];
    }
    public withAgentStatus(agentStatus: string): Host {
        this['agent_status'] = agentStatus;
        return this;
    }
    public set agentStatus(agentStatus: string  | undefined) {
        this['agent_status'] = agentStatus;
    }
    public get agentStatus(): string | undefined {
        return this['agent_status'];
    }
    public withInstallResultCode(installResultCode: string): Host {
        this['install_result_code'] = installResultCode;
        return this;
    }
    public set installResultCode(installResultCode: string  | undefined) {
        this['install_result_code'] = installResultCode;
    }
    public get installResultCode(): string | undefined {
        return this['install_result_code'];
    }
    public withVersion(version: string): Host {
        this['version'] = version;
        return this;
    }
    public withProtectStatus(protectStatus: string): Host {
        this['protect_status'] = protectStatus;
        return this;
    }
    public set protectStatus(protectStatus: string  | undefined) {
        this['protect_status'] = protectStatus;
    }
    public get protectStatus(): string | undefined {
        return this['protect_status'];
    }
    public withOsImage(osImage: string): Host {
        this['os_image'] = osImage;
        return this;
    }
    public set osImage(osImage: string  | undefined) {
        this['os_image'] = osImage;
    }
    public get osImage(): string | undefined {
        return this['os_image'];
    }
    public withOsType(osType: string): Host {
        this['os_type'] = osType;
        return this;
    }
    public set osType(osType: string  | undefined) {
        this['os_type'] = osType;
    }
    public get osType(): string | undefined {
        return this['os_type'];
    }
    public withOsBit(osBit: string): Host {
        this['os_bit'] = osBit;
        return this;
    }
    public set osBit(osBit: string  | undefined) {
        this['os_bit'] = osBit;
    }
    public get osBit(): string | undefined {
        return this['os_bit'];
    }
    public withDetectResult(detectResult: string): Host {
        this['detect_result'] = detectResult;
        return this;
    }
    public set detectResult(detectResult: string  | undefined) {
        this['detect_result'] = detectResult;
    }
    public get detectResult(): string | undefined {
        return this['detect_result'];
    }
    public withExpireTime(expireTime: number): Host {
        this['expire_time'] = expireTime;
        return this;
    }
    public set expireTime(expireTime: number  | undefined) {
        this['expire_time'] = expireTime;
    }
    public get expireTime(): number | undefined {
        return this['expire_time'];
    }
    public withChargingMode(chargingMode: string): Host {
        this['charging_mode'] = chargingMode;
        return this;
    }
    public set chargingMode(chargingMode: string  | undefined) {
        this['charging_mode'] = chargingMode;
    }
    public get chargingMode(): string | undefined {
        return this['charging_mode'];
    }
    public withResourceId(resourceId: string): Host {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withOutsideHost(outsideHost: boolean): Host {
        this['outside_host'] = outsideHost;
        return this;
    }
    public set outsideHost(outsideHost: boolean  | undefined) {
        this['outside_host'] = outsideHost;
    }
    public get outsideHost(): boolean | undefined {
        return this['outside_host'];
    }
    public withGroupId(groupId: string): Host {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withGroupName(groupName: string): Host {
        this['group_name'] = groupName;
        return this;
    }
    public set groupName(groupName: string  | undefined) {
        this['group_name'] = groupName;
    }
    public get groupName(): string | undefined {
        return this['group_name'];
    }
    public withPolicyGroupId(policyGroupId: string): Host {
        this['policy_group_id'] = policyGroupId;
        return this;
    }
    public set policyGroupId(policyGroupId: string  | undefined) {
        this['policy_group_id'] = policyGroupId;
    }
    public get policyGroupId(): string | undefined {
        return this['policy_group_id'];
    }
    public withPolicyGroupName(policyGroupName: string): Host {
        this['policy_group_name'] = policyGroupName;
        return this;
    }
    public set policyGroupName(policyGroupName: string  | undefined) {
        this['policy_group_name'] = policyGroupName;
    }
    public get policyGroupName(): string | undefined {
        return this['policy_group_name'];
    }
    public withAsset(asset: number): Host {
        this['asset'] = asset;
        return this;
    }
    public withVulnerability(vulnerability: number): Host {
        this['vulnerability'] = vulnerability;
        return this;
    }
    public withBaseline(baseline: number): Host {
        this['baseline'] = baseline;
        return this;
    }
    public withIntrusion(intrusion: number): Host {
        this['intrusion'] = intrusion;
        return this;
    }
    public withAssetValue(assetValue: string): Host {
        this['asset_value'] = assetValue;
        return this;
    }
    public set assetValue(assetValue: string  | undefined) {
        this['asset_value'] = assetValue;
    }
    public get assetValue(): string | undefined {
        return this['asset_value'];
    }
    public withLabels(labels: Array<string>): Host {
        this['labels'] = labels;
        return this;
    }
    public withAgentCreateTime(agentCreateTime: number): Host {
        this['agent_create_time'] = agentCreateTime;
        return this;
    }
    public set agentCreateTime(agentCreateTime: number  | undefined) {
        this['agent_create_time'] = agentCreateTime;
    }
    public get agentCreateTime(): number | undefined {
        return this['agent_create_time'];
    }
    public withAgentUpdateTime(agentUpdateTime: number): Host {
        this['agent_update_time'] = agentUpdateTime;
        return this;
    }
    public set agentUpdateTime(agentUpdateTime: number  | undefined) {
        this['agent_update_time'] = agentUpdateTime;
    }
    public get agentUpdateTime(): number | undefined {
        return this['agent_update_time'];
    }
    public withAgentVersion(agentVersion: string): Host {
        this['agent_version'] = agentVersion;
        return this;
    }
    public set agentVersion(agentVersion: string  | undefined) {
        this['agent_version'] = agentVersion;
    }
    public get agentVersion(): string | undefined {
        return this['agent_version'];
    }
    public withUpgradeStatus(upgradeStatus: string): Host {
        this['upgrade_status'] = upgradeStatus;
        return this;
    }
    public set upgradeStatus(upgradeStatus: string  | undefined) {
        this['upgrade_status'] = upgradeStatus;
    }
    public get upgradeStatus(): string | undefined {
        return this['upgrade_status'];
    }
    public withUpgradeResultCode(upgradeResultCode: string): Host {
        this['upgrade_result_code'] = upgradeResultCode;
        return this;
    }
    public set upgradeResultCode(upgradeResultCode: string  | undefined) {
        this['upgrade_result_code'] = upgradeResultCode;
    }
    public get upgradeResultCode(): string | undefined {
        return this['upgrade_result_code'];
    }
    public withUpgradable(upgradable: boolean): Host {
        this['upgradable'] = upgradable;
        return this;
    }
    public withOpenTime(openTime: number): Host {
        this['open_time'] = openTime;
        return this;
    }
    public set openTime(openTime: number  | undefined) {
        this['open_time'] = openTime;
    }
    public get openTime(): number | undefined {
        return this['open_time'];
    }
    public withProtectInterrupt(protectInterrupt: boolean): Host {
        this['protect_interrupt'] = protectInterrupt;
        return this;
    }
    public set protectInterrupt(protectInterrupt: boolean  | undefined) {
        this['protect_interrupt'] = protectInterrupt;
    }
    public get protectInterrupt(): boolean | undefined {
        return this['protect_interrupt'];
    }
    public withProtectDegradation(protectDegradation: boolean): Host {
        this['protect_degradation'] = protectDegradation;
        return this;
    }
    public set protectDegradation(protectDegradation: boolean  | undefined) {
        this['protect_degradation'] = protectDegradation;
    }
    public get protectDegradation(): boolean | undefined {
        return this['protect_degradation'];
    }
    public withHostSources(hostSources: HostHostSourcesEnum | string): Host {
        this['host_sources'] = hostSources;
        return this;
    }
    public set hostSources(hostSources: HostHostSourcesEnum | string  | undefined) {
        this['host_sources'] = hostSources;
    }
    public get hostSources(): HostHostSourcesEnum | string | undefined {
        return this['host_sources'];
    }
    public withInterruptReason(interruptReason: string): Host {
        this['interrupt_reason'] = interruptReason;
        return this;
    }
    public set interruptReason(interruptReason: string  | undefined) {
        this['interrupt_reason'] = interruptReason;
    }
    public get interruptReason(): string | undefined {
        return this['interrupt_reason'];
    }
    public withDegradationReason(degradationReason: string): Host {
        this['degradation_reason'] = degradationReason;
        return this;
    }
    public set degradationReason(degradationReason: string  | undefined) {
        this['degradation_reason'] = degradationReason;
    }
    public get degradationReason(): string | undefined {
        return this['degradation_reason'];
    }
    public withKeyName(keyName: string): Host {
        this['key_name'] = keyName;
        return this;
    }
    public set keyName(keyName: string  | undefined) {
        this['key_name'] = keyName;
    }
    public get keyName(): string | undefined {
        return this['key_name'];
    }
    public withAutoOpenVersion(autoOpenVersion: string): Host {
        this['auto_open_version'] = autoOpenVersion;
        return this;
    }
    public set autoOpenVersion(autoOpenVersion: string  | undefined) {
        this['auto_open_version'] = autoOpenVersion;
    }
    public get autoOpenVersion(): string | undefined {
        return this['auto_open_version'];
    }
    public withInstallProgress(installProgress: number): Host {
        this['install_progress'] = installProgress;
        return this;
    }
    public set installProgress(installProgress: number  | undefined) {
        this['install_progress'] = installProgress;
    }
    public get installProgress(): number | undefined {
        return this['install_progress'];
    }
    public withVpcId(vpcId: string): Host {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
    public withCommonLoginAreaCodes(commonLoginAreaCodes: Array<number>): Host {
        this['common_login_area_codes'] = commonLoginAreaCodes;
        return this;
    }
    public set commonLoginAreaCodes(commonLoginAreaCodes: Array<number>  | undefined) {
        this['common_login_area_codes'] = commonLoginAreaCodes;
    }
    public get commonLoginAreaCodes(): Array<number> | undefined {
        return this['common_login_area_codes'];
    }
    public withClusterName(clusterName: string): Host {
        this['cluster_name'] = clusterName;
        return this;
    }
    public set clusterName(clusterName: string  | undefined) {
        this['cluster_name'] = clusterName;
    }
    public get clusterName(): string | undefined {
        return this['cluster_name'];
    }
    public withClusterId(clusterId: string): Host {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum HostHostSourcesEnum {
    ECS = 'ecs',
    OUTSIDE = 'outside',
    WORKSPACE = 'workspace'
}
