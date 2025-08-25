

export class AssociateAppsRequestBody {
    private 'app_id'?: string;
    private 'cluster_id'?: string;
    public constructor(appId?: string, clusterId?: string) { 
        this['app_id'] = appId;
        this['cluster_id'] = clusterId;
    }
    public withAppId(appId: string): AssociateAppsRequestBody {
        this['app_id'] = appId;
        return this;
    }
    public set appId(appId: string  | undefined) {
        this['app_id'] = appId;
    }
    public get appId(): string | undefined {
        return this['app_id'];
    }
    public withClusterId(clusterId: string): AssociateAppsRequestBody {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
}