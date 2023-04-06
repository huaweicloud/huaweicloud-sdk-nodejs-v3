import { DeleteClusterRequestBody } from './DeleteClusterRequestBody';


export class DeleteClusterRequest {
    private 'cluster_id': string | undefined;
    public body?: DeleteClusterRequestBody;
    public constructor(clusterId?: any) { 
        this['cluster_id'] = clusterId;
    }
    public withClusterId(clusterId: string): DeleteClusterRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId() {
        return this['cluster_id'];
    }
    public withBody(body: DeleteClusterRequestBody): DeleteClusterRequest {
        this['body'] = body;
        return this;
    }
}