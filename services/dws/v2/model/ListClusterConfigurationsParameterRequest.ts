

export class ListClusterConfigurationsParameterRequest {
    private 'cluster_id': string | undefined;
    private 'configuration_id': string | undefined;
    public constructor(clusterId?: any, configurationId?: any) { 
        this['cluster_id'] = clusterId;
        this['configuration_id'] = configurationId;
    }
    public withClusterId(clusterId: string): ListClusterConfigurationsParameterRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId() {
        return this['cluster_id'];
    }
    public withConfigurationId(configurationId: string): ListClusterConfigurationsParameterRequest {
        this['configuration_id'] = configurationId;
        return this;
    }
    public set configurationId(configurationId: string | undefined) {
        this['configuration_id'] = configurationId;
    }
    public get configurationId() {
        return this['configuration_id'];
    }
}