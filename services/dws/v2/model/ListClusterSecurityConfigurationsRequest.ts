

export class ListClusterSecurityConfigurationsRequest {
    private 'cluster_id'?: string;
    private 'configuration_id'?: string;
    public limit?: number;
    public offset?: number;
    public constructor(clusterId?: string, configurationId?: string) { 
        this['cluster_id'] = clusterId;
        this['configuration_id'] = configurationId;
    }
    public withClusterId(clusterId: string): ListClusterSecurityConfigurationsRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withConfigurationId(configurationId: string): ListClusterSecurityConfigurationsRequest {
        this['configuration_id'] = configurationId;
        return this;
    }
    public set configurationId(configurationId: string  | undefined) {
        this['configuration_id'] = configurationId;
    }
    public get configurationId(): string | undefined {
        return this['configuration_id'];
    }
    public withLimit(limit: number): ListClusterSecurityConfigurationsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListClusterSecurityConfigurationsRequest {
        this['offset'] = offset;
        return this;
    }
}