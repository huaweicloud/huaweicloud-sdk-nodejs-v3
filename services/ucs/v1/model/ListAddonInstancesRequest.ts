

export class ListAddonInstancesRequest {
    private 'cluster_id'?: string;
    private 'addon_template_name'?: string;
    private 'is_database_status'?: string;
    public constructor(clusterId?: string) { 
        this['cluster_id'] = clusterId;
    }
    public withClusterId(clusterId: string): ListAddonInstancesRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withAddonTemplateName(addonTemplateName: string): ListAddonInstancesRequest {
        this['addon_template_name'] = addonTemplateName;
        return this;
    }
    public set addonTemplateName(addonTemplateName: string  | undefined) {
        this['addon_template_name'] = addonTemplateName;
    }
    public get addonTemplateName(): string | undefined {
        return this['addon_template_name'];
    }
    public withIsDatabaseStatus(isDatabaseStatus: string): ListAddonInstancesRequest {
        this['is_database_status'] = isDatabaseStatus;
        return this;
    }
    public set isDatabaseStatus(isDatabaseStatus: string  | undefined) {
        this['is_database_status'] = isDatabaseStatus;
    }
    public get isDatabaseStatus(): string | undefined {
        return this['is_database_status'];
    }
}