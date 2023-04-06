import { ModifyClusterDns } from './ModifyClusterDns';


export class UpdateClusterDnsRequest {
    private 'cluster_id': string | undefined;
    public body?: ModifyClusterDns;
    public constructor(clusterId?: any) { 
        this['cluster_id'] = clusterId;
    }
    public withClusterId(clusterId: string): UpdateClusterDnsRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId() {
        return this['cluster_id'];
    }
    public withBody(body: ModifyClusterDns): UpdateClusterDnsRequest {
        this['body'] = body;
        return this;
    }
}