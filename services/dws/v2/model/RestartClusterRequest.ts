import { RestartClusterRequestBody } from './RestartClusterRequestBody';


export class RestartClusterRequest {
    private 'cluster_id': string | undefined;
    public body?: RestartClusterRequestBody;
    public constructor(clusterId?: any) { 
        this['cluster_id'] = clusterId;
    }
    public withClusterId(clusterId: string): RestartClusterRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId() {
        return this['cluster_id'];
    }
    public withBody(body: RestartClusterRequestBody): RestartClusterRequest {
        this['body'] = body;
        return this;
    }
}