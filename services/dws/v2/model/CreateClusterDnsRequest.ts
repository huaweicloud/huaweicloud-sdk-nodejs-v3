import { CreateClusterDns } from './CreateClusterDns';


export class CreateClusterDnsRequest {
    private 'cluster_id': string | undefined;
    public body?: CreateClusterDns;
    public constructor(clusterId?: any) { 
        this['cluster_id'] = clusterId;
    }
    public withClusterId(clusterId: string): CreateClusterDnsRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId() {
        return this['cluster_id'];
    }
    public withBody(body: CreateClusterDns): CreateClusterDnsRequest {
        this['body'] = body;
        return this;
    }
}