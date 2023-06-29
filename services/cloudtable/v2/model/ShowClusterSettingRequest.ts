

export class ShowClusterSettingRequest {
    private 'cluster_id': string | undefined;
    private 'X-Language'?: string | undefined;
    public constructor(clusterId?: any) { 
        this['cluster_id'] = clusterId;
    }
    public withClusterId(clusterId: string): ShowClusterSettingRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId() {
        return this['cluster_id'];
    }
    public withXLanguage(xLanguage: string): ShowClusterSettingRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage() {
        return this['X-Language'];
    }
}