import { ExpandParam } from './ExpandParam';


export class ExpandClusterRequest {
    private 'cluster_id'?: string;
    public body?: ExpandParam;
    public constructor(clusterId?: string) { 
        this['cluster_id'] = clusterId;
    }
    public withClusterId(clusterId: string): ExpandClusterRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withBody(body: ExpandParam): ExpandClusterRequest {
        this['body'] = body;
        return this;
    }
}