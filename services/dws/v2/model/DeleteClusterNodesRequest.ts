import { DeleteClusterNodesRequestBody } from './DeleteClusterNodesRequestBody';


export class DeleteClusterNodesRequest {
    private 'cluster_id'?: string;
    public body?: DeleteClusterNodesRequestBody;
    public constructor(clusterId?: string) { 
        this['cluster_id'] = clusterId;
    }
    public withClusterId(clusterId: string): DeleteClusterNodesRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withBody(body: DeleteClusterNodesRequestBody): DeleteClusterNodesRequest {
        this['body'] = body;
        return this;
    }
}