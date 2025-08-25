

export class DisAssociateAppsRequestBody {
    private 'cluster_id'?: string;
    private 'app_ids'?: Array<string>;
    public constructor(clusterId?: string, appIds?: Array<string>) { 
        this['cluster_id'] = clusterId;
        this['app_ids'] = appIds;
    }
    public withClusterId(clusterId: string): DisAssociateAppsRequestBody {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withAppIds(appIds: Array<string>): DisAssociateAppsRequestBody {
        this['app_ids'] = appIds;
        return this;
    }
    public set appIds(appIds: Array<string>  | undefined) {
        this['app_ids'] = appIds;
    }
    public get appIds(): Array<string> | undefined {
        return this['app_ids'];
    }
}