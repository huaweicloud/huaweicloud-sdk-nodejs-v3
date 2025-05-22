import { RedistributionConf } from './RedistributionConf';


export class UpdateRedistributionConfigurationsRequest {
    private 'cluster_id'?: string;
    public body?: RedistributionConf;
    public constructor(clusterId?: string) { 
        this['cluster_id'] = clusterId;
    }
    public withClusterId(clusterId: string): UpdateRedistributionConfigurationsRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withBody(body: RedistributionConf): UpdateRedistributionConfigurationsRequest {
        this['body'] = body;
        return this;
    }
}