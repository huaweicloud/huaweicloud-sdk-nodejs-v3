import { CreateElbClusterPortRequestBody } from './CreateElbClusterPortRequestBody';


export class AddClusterPortRequest {
    private 'cluster_id'?: string;
    public body?: CreateElbClusterPortRequestBody;
    public constructor(clusterId?: string) { 
        this['cluster_id'] = clusterId;
    }
    public withClusterId(clusterId: string): AddClusterPortRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withBody(body: CreateElbClusterPortRequestBody): AddClusterPortRequest {
        this['body'] = body;
        return this;
    }
}