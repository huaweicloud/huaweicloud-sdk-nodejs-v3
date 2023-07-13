import { HbaseClusterActionReq } from './HbaseClusterActionReq';


export class RebootCloudTableClusterRequest {
    private 'cluster_id': string | undefined;
    private 'X-Language'?: string | undefined;
    public body?: HbaseClusterActionReq;
    public constructor(clusterId?: any) { 
        this['cluster_id'] = clusterId;
    }
    public withClusterId(clusterId: string): RebootCloudTableClusterRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId() {
        return this['cluster_id'];
    }
    public withXLanguage(xLanguage: string): RebootCloudTableClusterRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage() {
        return this['X-Language'];
    }
    public withBody(body: HbaseClusterActionReq): RebootCloudTableClusterRequest {
        this['body'] = body;
        return this;
    }
}