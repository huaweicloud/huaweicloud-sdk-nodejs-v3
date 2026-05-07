

export class ListCommonHostRequest {
    private 'enterprise_project_id'?: string;
    public offset?: number;
    public limit?: number;
    private 'host_id'?: string;
    private 'host_name'?: string;
    private 'private_ip'?: string;
    private 'public_ip'?: string;
    private 'feature_name'?: string;
    private 'group_id'?: string;
    private 'asset_value'?: string;
    private 'agent_status'?: string;
    private 'cluster_id'?: string;
    private 'cluster_name'?: string;
    private 'version_name_upper'?: string;
    private 'version_name_lower'?: string;
    public constructor(offset?: number, limit?: number) { 
        this['offset'] = offset;
        this['limit'] = limit;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListCommonHostRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withOffset(offset: number): ListCommonHostRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListCommonHostRequest {
        this['limit'] = limit;
        return this;
    }
    public withHostId(hostId: string): ListCommonHostRequest {
        this['host_id'] = hostId;
        return this;
    }
    public set hostId(hostId: string  | undefined) {
        this['host_id'] = hostId;
    }
    public get hostId(): string | undefined {
        return this['host_id'];
    }
    public withHostName(hostName: string): ListCommonHostRequest {
        this['host_name'] = hostName;
        return this;
    }
    public set hostName(hostName: string  | undefined) {
        this['host_name'] = hostName;
    }
    public get hostName(): string | undefined {
        return this['host_name'];
    }
    public withPrivateIp(privateIp: string): ListCommonHostRequest {
        this['private_ip'] = privateIp;
        return this;
    }
    public set privateIp(privateIp: string  | undefined) {
        this['private_ip'] = privateIp;
    }
    public get privateIp(): string | undefined {
        return this['private_ip'];
    }
    public withPublicIp(publicIp: string): ListCommonHostRequest {
        this['public_ip'] = publicIp;
        return this;
    }
    public set publicIp(publicIp: string  | undefined) {
        this['public_ip'] = publicIp;
    }
    public get publicIp(): string | undefined {
        return this['public_ip'];
    }
    public withFeatureName(featureName: string): ListCommonHostRequest {
        this['feature_name'] = featureName;
        return this;
    }
    public set featureName(featureName: string  | undefined) {
        this['feature_name'] = featureName;
    }
    public get featureName(): string | undefined {
        return this['feature_name'];
    }
    public withGroupId(groupId: string): ListCommonHostRequest {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withAssetValue(assetValue: string): ListCommonHostRequest {
        this['asset_value'] = assetValue;
        return this;
    }
    public set assetValue(assetValue: string  | undefined) {
        this['asset_value'] = assetValue;
    }
    public get assetValue(): string | undefined {
        return this['asset_value'];
    }
    public withAgentStatus(agentStatus: string): ListCommonHostRequest {
        this['agent_status'] = agentStatus;
        return this;
    }
    public set agentStatus(agentStatus: string  | undefined) {
        this['agent_status'] = agentStatus;
    }
    public get agentStatus(): string | undefined {
        return this['agent_status'];
    }
    public withClusterId(clusterId: string): ListCommonHostRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withClusterName(clusterName: string): ListCommonHostRequest {
        this['cluster_name'] = clusterName;
        return this;
    }
    public set clusterName(clusterName: string  | undefined) {
        this['cluster_name'] = clusterName;
    }
    public get clusterName(): string | undefined {
        return this['cluster_name'];
    }
    public withVersionNameUpper(versionNameUpper: string): ListCommonHostRequest {
        this['version_name_upper'] = versionNameUpper;
        return this;
    }
    public set versionNameUpper(versionNameUpper: string  | undefined) {
        this['version_name_upper'] = versionNameUpper;
    }
    public get versionNameUpper(): string | undefined {
        return this['version_name_upper'];
    }
    public withVersionNameLower(versionNameLower: string): ListCommonHostRequest {
        this['version_name_lower'] = versionNameLower;
        return this;
    }
    public set versionNameLower(versionNameLower: string  | undefined) {
        this['version_name_lower'] = versionNameLower;
    }
    public get versionNameLower(): string | undefined {
        return this['version_name_lower'];
    }
}