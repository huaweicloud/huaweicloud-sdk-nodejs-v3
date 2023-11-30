

export class PluginBasicVO {
    private 'plugin_name'?: string;
    private 'display_name'?: string;
    public version?: string;
    private 'version_description'?: string;
    public description?: string;
    private 'version_attribution'?: string;
    private 'unique_id'?: string;
    private 'op_user'?: string;
    private 'op_time'?: string;
    private 'plugin_composition_type'?: string;
    private 'plugin_attribution'?: string;
    private 'workspace_id'?: string;
    private 'business_type'?: string;
    private 'business_type_display_name'?: string;
    public maintainers?: string;
    private 'icon_url'?: string;
    private 'refer_count'?: number;
    private 'usage_count'?: number;
    private 'runtime_attribution'?: string;
    public active?: number;
    public constructor() { 
    }
    public withPluginName(pluginName: string): PluginBasicVO {
        this['plugin_name'] = pluginName;
        return this;
    }
    public set pluginName(pluginName: string  | undefined) {
        this['plugin_name'] = pluginName;
    }
    public get pluginName(): string | undefined {
        return this['plugin_name'];
    }
    public withDisplayName(displayName: string): PluginBasicVO {
        this['display_name'] = displayName;
        return this;
    }
    public set displayName(displayName: string  | undefined) {
        this['display_name'] = displayName;
    }
    public get displayName(): string | undefined {
        return this['display_name'];
    }
    public withVersion(version: string): PluginBasicVO {
        this['version'] = version;
        return this;
    }
    public withVersionDescription(versionDescription: string): PluginBasicVO {
        this['version_description'] = versionDescription;
        return this;
    }
    public set versionDescription(versionDescription: string  | undefined) {
        this['version_description'] = versionDescription;
    }
    public get versionDescription(): string | undefined {
        return this['version_description'];
    }
    public withDescription(description: string): PluginBasicVO {
        this['description'] = description;
        return this;
    }
    public withVersionAttribution(versionAttribution: string): PluginBasicVO {
        this['version_attribution'] = versionAttribution;
        return this;
    }
    public set versionAttribution(versionAttribution: string  | undefined) {
        this['version_attribution'] = versionAttribution;
    }
    public get versionAttribution(): string | undefined {
        return this['version_attribution'];
    }
    public withUniqueId(uniqueId: string): PluginBasicVO {
        this['unique_id'] = uniqueId;
        return this;
    }
    public set uniqueId(uniqueId: string  | undefined) {
        this['unique_id'] = uniqueId;
    }
    public get uniqueId(): string | undefined {
        return this['unique_id'];
    }
    public withOpUser(opUser: string): PluginBasicVO {
        this['op_user'] = opUser;
        return this;
    }
    public set opUser(opUser: string  | undefined) {
        this['op_user'] = opUser;
    }
    public get opUser(): string | undefined {
        return this['op_user'];
    }
    public withOpTime(opTime: string): PluginBasicVO {
        this['op_time'] = opTime;
        return this;
    }
    public set opTime(opTime: string  | undefined) {
        this['op_time'] = opTime;
    }
    public get opTime(): string | undefined {
        return this['op_time'];
    }
    public withPluginCompositionType(pluginCompositionType: string): PluginBasicVO {
        this['plugin_composition_type'] = pluginCompositionType;
        return this;
    }
    public set pluginCompositionType(pluginCompositionType: string  | undefined) {
        this['plugin_composition_type'] = pluginCompositionType;
    }
    public get pluginCompositionType(): string | undefined {
        return this['plugin_composition_type'];
    }
    public withPluginAttribution(pluginAttribution: string): PluginBasicVO {
        this['plugin_attribution'] = pluginAttribution;
        return this;
    }
    public set pluginAttribution(pluginAttribution: string  | undefined) {
        this['plugin_attribution'] = pluginAttribution;
    }
    public get pluginAttribution(): string | undefined {
        return this['plugin_attribution'];
    }
    public withWorkspaceId(workspaceId: string): PluginBasicVO {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withBusinessType(businessType: string): PluginBasicVO {
        this['business_type'] = businessType;
        return this;
    }
    public set businessType(businessType: string  | undefined) {
        this['business_type'] = businessType;
    }
    public get businessType(): string | undefined {
        return this['business_type'];
    }
    public withBusinessTypeDisplayName(businessTypeDisplayName: string): PluginBasicVO {
        this['business_type_display_name'] = businessTypeDisplayName;
        return this;
    }
    public set businessTypeDisplayName(businessTypeDisplayName: string  | undefined) {
        this['business_type_display_name'] = businessTypeDisplayName;
    }
    public get businessTypeDisplayName(): string | undefined {
        return this['business_type_display_name'];
    }
    public withMaintainers(maintainers: string): PluginBasicVO {
        this['maintainers'] = maintainers;
        return this;
    }
    public withIconUrl(iconUrl: string): PluginBasicVO {
        this['icon_url'] = iconUrl;
        return this;
    }
    public set iconUrl(iconUrl: string  | undefined) {
        this['icon_url'] = iconUrl;
    }
    public get iconUrl(): string | undefined {
        return this['icon_url'];
    }
    public withReferCount(referCount: number): PluginBasicVO {
        this['refer_count'] = referCount;
        return this;
    }
    public set referCount(referCount: number  | undefined) {
        this['refer_count'] = referCount;
    }
    public get referCount(): number | undefined {
        return this['refer_count'];
    }
    public withUsageCount(usageCount: number): PluginBasicVO {
        this['usage_count'] = usageCount;
        return this;
    }
    public set usageCount(usageCount: number  | undefined) {
        this['usage_count'] = usageCount;
    }
    public get usageCount(): number | undefined {
        return this['usage_count'];
    }
    public withRuntimeAttribution(runtimeAttribution: string): PluginBasicVO {
        this['runtime_attribution'] = runtimeAttribution;
        return this;
    }
    public set runtimeAttribution(runtimeAttribution: string  | undefined) {
        this['runtime_attribution'] = runtimeAttribution;
    }
    public get runtimeAttribution(): string | undefined {
        return this['runtime_attribution'];
    }
    public withActive(active: number): PluginBasicVO {
        this['active'] = active;
        return this;
    }
}