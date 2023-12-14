import { CreateLogicalClusterRequestBody } from './CreateLogicalClusterRequestBody';


export class CreateLogicalClusterRequest {
    private 'cluster_id'?: string;
    public body?: CreateLogicalClusterRequestBody;
    public constructor(clusterId?: string) { 
        this['cluster_id'] = clusterId;
    }
    public withClusterId(clusterId: string): CreateLogicalClusterRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withBody(body: CreateLogicalClusterRequestBody): CreateLogicalClusterRequest {
        this['body'] = body;
        return this;
    }
}