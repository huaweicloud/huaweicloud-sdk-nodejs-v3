import { UpgradeClusterRequestBody } from './UpgradeClusterRequestBody';


export class UpgradeClusterRequest {
    private 'cluster_id': string | undefined;
    public body?: UpgradeClusterRequestBody;
    public constructor(clusterId?: any) { 
        this['cluster_id'] = clusterId;
    }
    public withClusterId(clusterId: string): UpgradeClusterRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId() {
        return this['cluster_id'];
    }
    public withBody(body: UpgradeClusterRequestBody): UpgradeClusterRequest {
        this['body'] = body;
        return this;
    }
}