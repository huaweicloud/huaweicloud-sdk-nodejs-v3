

export class ListAddonTemplatesRequest {
    public version?: string;
    public newest?: string;
    private 'cluster_id'?: string;
    private 'addon_template_name'?: string;
    private 'base_update_addon_version'?: string;
    public constructor() { 
    }
    public withVersion(version: string): ListAddonTemplatesRequest {
        this['version'] = version;
        return this;
    }
    public withNewest(newest: string): ListAddonTemplatesRequest {
        this['newest'] = newest;
        return this;
    }
    public withClusterId(clusterId: string): ListAddonTemplatesRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withAddonTemplateName(addonTemplateName: string): ListAddonTemplatesRequest {
        this['addon_template_name'] = addonTemplateName;
        return this;
    }
    public set addonTemplateName(addonTemplateName: string  | undefined) {
        this['addon_template_name'] = addonTemplateName;
    }
    public get addonTemplateName(): string | undefined {
        return this['addon_template_name'];
    }
    public withBaseUpdateAddonVersion(baseUpdateAddonVersion: string): ListAddonTemplatesRequest {
        this['base_update_addon_version'] = baseUpdateAddonVersion;
        return this;
    }
    public set baseUpdateAddonVersion(baseUpdateAddonVersion: string  | undefined) {
        this['base_update_addon_version'] = baseUpdateAddonVersion;
    }
    public get baseUpdateAddonVersion(): string | undefined {
        return this['base_update_addon_version'];
    }
}