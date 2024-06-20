

export class PluginBasicDTO {
    private 'unique_id'?: string;
    private 'icon_url'?: string;
    private 'runtime_attribution'?: string;
    private 'plugin_name'?: string;
    private 'display_name'?: string;
    private 'business_type'?: string;
    private 'business_type_display_name'?: string;
    public description?: string;
    private 'is_private'?: number;
    public region?: string;
    public maintainers?: string;
    private 'plugin_composition_type'?: string;
    public constructor(pluginName?: string, displayName?: string, businessType?: string, businessTypeDisplayName?: string) { 
        this['plugin_name'] = pluginName;
        this['display_name'] = displayName;
        this['business_type'] = businessType;
        this['business_type_display_name'] = businessTypeDisplayName;
    }
    public withUniqueId(uniqueId: string): PluginBasicDTO {
        this['unique_id'] = uniqueId;
        return this;
    }
    public set uniqueId(uniqueId: string  | undefined) {
        this['unique_id'] = uniqueId;
    }
    public get uniqueId(): string | undefined {
        return this['unique_id'];
    }
    public withIconUrl(iconUrl: string): PluginBasicDTO {
        this['icon_url'] = iconUrl;
        return this;
    }
    public set iconUrl(iconUrl: string  | undefined) {
        this['icon_url'] = iconUrl;
    }
    public get iconUrl(): string | undefined {
        return this['icon_url'];
    }
    public withRuntimeAttribution(runtimeAttribution: string): PluginBasicDTO {
        this['runtime_attribution'] = runtimeAttribution;
        return this;
    }
    public set runtimeAttribution(runtimeAttribution: string  | undefined) {
        this['runtime_attribution'] = runtimeAttribution;
    }
    public get runtimeAttribution(): string | undefined {
        return this['runtime_attribution'];
    }
    public withPluginName(pluginName: string): PluginBasicDTO {
        this['plugin_name'] = pluginName;
        return this;
    }
    public set pluginName(pluginName: string  | undefined) {
        this['plugin_name'] = pluginName;
    }
    public get pluginName(): string | undefined {
        return this['plugin_name'];
    }
    public withDisplayName(displayName: string): PluginBasicDTO {
        this['display_name'] = displayName;
        return this;
    }
    public set displayName(displayName: string  | undefined) {
        this['display_name'] = displayName;
    }
    public get displayName(): string | undefined {
        return this['display_name'];
    }
    public withBusinessType(businessType: string): PluginBasicDTO {
        this['business_type'] = businessType;
        return this;
    }
    public set businessType(businessType: string  | undefined) {
        this['business_type'] = businessType;
    }
    public get businessType(): string | undefined {
        return this['business_type'];
    }
    public withBusinessTypeDisplayName(businessTypeDisplayName: string): PluginBasicDTO {
        this['business_type_display_name'] = businessTypeDisplayName;
        return this;
    }
    public set businessTypeDisplayName(businessTypeDisplayName: string  | undefined) {
        this['business_type_display_name'] = businessTypeDisplayName;
    }
    public get businessTypeDisplayName(): string | undefined {
        return this['business_type_display_name'];
    }
    public withDescription(description: string): PluginBasicDTO {
        this['description'] = description;
        return this;
    }
    public withIsPrivate(isPrivate: number): PluginBasicDTO {
        this['is_private'] = isPrivate;
        return this;
    }
    public set isPrivate(isPrivate: number  | undefined) {
        this['is_private'] = isPrivate;
    }
    public get isPrivate(): number | undefined {
        return this['is_private'];
    }
    public withRegion(region: string): PluginBasicDTO {
        this['region'] = region;
        return this;
    }
    public withMaintainers(maintainers: string): PluginBasicDTO {
        this['maintainers'] = maintainers;
        return this;
    }
    public withPluginCompositionType(pluginCompositionType: string): PluginBasicDTO {
        this['plugin_composition_type'] = pluginCompositionType;
        return this;
    }
    public set pluginCompositionType(pluginCompositionType: string  | undefined) {
        this['plugin_composition_type'] = pluginCompositionType;
    }
    public get pluginCompositionType(): string | undefined {
        return this['plugin_composition_type'];
    }
}