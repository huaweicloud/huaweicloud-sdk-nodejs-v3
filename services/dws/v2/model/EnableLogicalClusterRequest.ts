import { EnableLogicalClusterRequestBody } from './EnableLogicalClusterRequestBody';


export class EnableLogicalClusterRequest {
    private 'cluster_id'?: string;
    public body?: EnableLogicalClusterRequestBody;
    public constructor(clusterId?: string) { 
        this['cluster_id'] = clusterId;
    }
    public withClusterId(clusterId: string): EnableLogicalClusterRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withBody(body: EnableLogicalClusterRequestBody): EnableLogicalClusterRequest {
        this['body'] = body;
        return this;
    }
}