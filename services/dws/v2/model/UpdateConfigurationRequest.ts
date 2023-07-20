import { ConfigurationParameterValues } from './ConfigurationParameterValues';


export class UpdateConfigurationRequest {
    private 'cluster_id'?: string;
    private 'configuration_id'?: string;
    public body?: ConfigurationParameterValues;
    public constructor(clusterId?: string, configurationId?: string) { 
        this['cluster_id'] = clusterId;
        this['configuration_id'] = configurationId;
    }
    public withClusterId(clusterId: string): UpdateConfigurationRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withConfigurationId(configurationId: string): UpdateConfigurationRequest {
        this['configuration_id'] = configurationId;
        return this;
    }
    public set configurationId(configurationId: string  | undefined) {
        this['configuration_id'] = configurationId;
    }
    public get configurationId(): string | undefined {
        return this['configuration_id'];
    }
    public withBody(body: ConfigurationParameterValues): UpdateConfigurationRequest {
        this['body'] = body;
        return this;
    }
}