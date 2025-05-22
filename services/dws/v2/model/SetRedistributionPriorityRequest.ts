import { RedisPriorityConf } from './RedisPriorityConf';


export class SetRedistributionPriorityRequest {
    private 'cluster_id'?: string;
    public body?: RedisPriorityConf;
    public constructor(clusterId?: string) { 
        this['cluster_id'] = clusterId;
    }
    public withClusterId(clusterId: string): SetRedistributionPriorityRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withBody(body: RedisPriorityConf): SetRedistributionPriorityRequest {
        this['body'] = body;
        return this;
    }
}