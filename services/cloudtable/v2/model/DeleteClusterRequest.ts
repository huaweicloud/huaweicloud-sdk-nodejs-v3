

export class DeleteClusterRequest {
    private 'X-Language': string | undefined;
    private 'cluster_id': string | undefined;
    public constructor(xLanguage?: any, clusterId?: any) { 
        this['X-Language'] = xLanguage;
        this['cluster_id'] = clusterId;
    }
    public withXLanguage(xLanguage: string): DeleteClusterRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage() {
        return this['X-Language'];
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
}