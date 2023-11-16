

export class PageInfoOptionalSinglePluginVOData {
    public name?: string;
    private 'display_name'?: string;
    private 'plugin_attribution'?: string;
    private 'icon_url'?: string;
    public description?: string;
    private 'publisher_id'?: string;
    private 'manifest_version'?: string;
    public constructor() { 
    }
    public withName(name: string): PageInfoOptionalSinglePluginVOData {
        this['name'] = name;
        return this;
    }
    public withDisplayName(displayName: string): PageInfoOptionalSinglePluginVOData {
        this['display_name'] = displayName;
        return this;
    }
    public set displayName(displayName: string  | undefined) {
        this['display_name'] = displayName;
    }
    public get displayName(): string | undefined {
        return this['display_name'];
    }
    public withPluginAttribution(pluginAttribution: string): PageInfoOptionalSinglePluginVOData {
        this['plugin_attribution'] = pluginAttribution;
        return this;
    }
    public set pluginAttribution(pluginAttribution: string  | undefined) {
        this['plugin_attribution'] = pluginAttribution;
    }
    public get pluginAttribution(): string | undefined {
        return this['plugin_attribution'];
    }
    public withIconUrl(iconUrl: string): PageInfoOptionalSinglePluginVOData {
        this['icon_url'] = iconUrl;
        return this;
    }
    public set iconUrl(iconUrl: string  | undefined) {
        this['icon_url'] = iconUrl;
    }
    public get iconUrl(): string | undefined {
        return this['icon_url'];
    }
    public withDescription(description: string): PageInfoOptionalSinglePluginVOData {
        this['description'] = description;
        return this;
    }
    public withPublisherId(publisherId: string): PageInfoOptionalSinglePluginVOData {
        this['publisher_id'] = publisherId;
        return this;
    }
    public set publisherId(publisherId: string  | undefined) {
        this['publisher_id'] = publisherId;
    }
    public get publisherId(): string | undefined {
        return this['publisher_id'];
    }
    public withManifestVersion(manifestVersion: string): PageInfoOptionalSinglePluginVOData {
        this['manifest_version'] = manifestVersion;
        return this;
    }
    public set manifestVersion(manifestVersion: string  | undefined) {
        this['manifest_version'] = manifestVersion;
    }
    public get manifestVersion(): string | undefined {
        return this['manifest_version'];
    }
}