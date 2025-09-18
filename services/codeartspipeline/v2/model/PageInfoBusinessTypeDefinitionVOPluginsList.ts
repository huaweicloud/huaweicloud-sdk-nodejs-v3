import { PageInfoBusinessTypeDefinitionVOAllSteps } from './PageInfoBusinessTypeDefinitionVOAllSteps';


export class PageInfoBusinessTypeDefinitionVOPluginsList {
    private 'unique_id'?: string;
    private 'display_name'?: string;
    private 'plugin_name'?: string;
    public disabled?: boolean;
    private 'group_name'?: string;
    private 'group_type'?: string;
    public standard?: boolean;
    private 'db_record_name'?: string;
    private 'plugin_attribution'?: string;
    private 'plugin_composition_type'?: string;
    private 'runtime_attribution'?: string;
    private 'all_steps'?: Array<PageInfoBusinessTypeDefinitionVOAllSteps>;
    public description?: string;
    private 'version_attribution'?: string;
    private 'icon_url'?: string;
    private 'multi_step_editable'?: number;
    public location?: string;
    private 'publisher_unique_id'?: string;
    private 'manifest_version'?: string;
    public constructor() { 
    }
    public withUniqueId(uniqueId: string): PageInfoBusinessTypeDefinitionVOPluginsList {
        this['unique_id'] = uniqueId;
        return this;
    }
    public set uniqueId(uniqueId: string  | undefined) {
        this['unique_id'] = uniqueId;
    }
    public get uniqueId(): string | undefined {
        return this['unique_id'];
    }
    public withDisplayName(displayName: string): PageInfoBusinessTypeDefinitionVOPluginsList {
        this['display_name'] = displayName;
        return this;
    }
    public set displayName(displayName: string  | undefined) {
        this['display_name'] = displayName;
    }
    public get displayName(): string | undefined {
        return this['display_name'];
    }
    public withPluginName(pluginName: string): PageInfoBusinessTypeDefinitionVOPluginsList {
        this['plugin_name'] = pluginName;
        return this;
    }
    public set pluginName(pluginName: string  | undefined) {
        this['plugin_name'] = pluginName;
    }
    public get pluginName(): string | undefined {
        return this['plugin_name'];
    }
    public withDisabled(disabled: boolean): PageInfoBusinessTypeDefinitionVOPluginsList {
        this['disabled'] = disabled;
        return this;
    }
    public withGroupName(groupName: string): PageInfoBusinessTypeDefinitionVOPluginsList {
        this['group_name'] = groupName;
        return this;
    }
    public set groupName(groupName: string  | undefined) {
        this['group_name'] = groupName;
    }
    public get groupName(): string | undefined {
        return this['group_name'];
    }
    public withGroupType(groupType: string): PageInfoBusinessTypeDefinitionVOPluginsList {
        this['group_type'] = groupType;
        return this;
    }
    public set groupType(groupType: string  | undefined) {
        this['group_type'] = groupType;
    }
    public get groupType(): string | undefined {
        return this['group_type'];
    }
    public withStandard(standard: boolean): PageInfoBusinessTypeDefinitionVOPluginsList {
        this['standard'] = standard;
        return this;
    }
    public withDbRecordName(dbRecordName: string): PageInfoBusinessTypeDefinitionVOPluginsList {
        this['db_record_name'] = dbRecordName;
        return this;
    }
    public set dbRecordName(dbRecordName: string  | undefined) {
        this['db_record_name'] = dbRecordName;
    }
    public get dbRecordName(): string | undefined {
        return this['db_record_name'];
    }
    public withPluginAttribution(pluginAttribution: string): PageInfoBusinessTypeDefinitionVOPluginsList {
        this['plugin_attribution'] = pluginAttribution;
        return this;
    }
    public set pluginAttribution(pluginAttribution: string  | undefined) {
        this['plugin_attribution'] = pluginAttribution;
    }
    public get pluginAttribution(): string | undefined {
        return this['plugin_attribution'];
    }
    public withPluginCompositionType(pluginCompositionType: string): PageInfoBusinessTypeDefinitionVOPluginsList {
        this['plugin_composition_type'] = pluginCompositionType;
        return this;
    }
    public set pluginCompositionType(pluginCompositionType: string  | undefined) {
        this['plugin_composition_type'] = pluginCompositionType;
    }
    public get pluginCompositionType(): string | undefined {
        return this['plugin_composition_type'];
    }
    public withRuntimeAttribution(runtimeAttribution: string): PageInfoBusinessTypeDefinitionVOPluginsList {
        this['runtime_attribution'] = runtimeAttribution;
        return this;
    }
    public set runtimeAttribution(runtimeAttribution: string  | undefined) {
        this['runtime_attribution'] = runtimeAttribution;
    }
    public get runtimeAttribution(): string | undefined {
        return this['runtime_attribution'];
    }
    public withAllSteps(allSteps: Array<PageInfoBusinessTypeDefinitionVOAllSteps>): PageInfoBusinessTypeDefinitionVOPluginsList {
        this['all_steps'] = allSteps;
        return this;
    }
    public set allSteps(allSteps: Array<PageInfoBusinessTypeDefinitionVOAllSteps>  | undefined) {
        this['all_steps'] = allSteps;
    }
    public get allSteps(): Array<PageInfoBusinessTypeDefinitionVOAllSteps> | undefined {
        return this['all_steps'];
    }
    public withDescription(description: string): PageInfoBusinessTypeDefinitionVOPluginsList {
        this['description'] = description;
        return this;
    }
    public withVersionAttribution(versionAttribution: string): PageInfoBusinessTypeDefinitionVOPluginsList {
        this['version_attribution'] = versionAttribution;
        return this;
    }
    public set versionAttribution(versionAttribution: string  | undefined) {
        this['version_attribution'] = versionAttribution;
    }
    public get versionAttribution(): string | undefined {
        return this['version_attribution'];
    }
    public withIconUrl(iconUrl: string): PageInfoBusinessTypeDefinitionVOPluginsList {
        this['icon_url'] = iconUrl;
        return this;
    }
    public set iconUrl(iconUrl: string  | undefined) {
        this['icon_url'] = iconUrl;
    }
    public get iconUrl(): string | undefined {
        return this['icon_url'];
    }
    public withMultiStepEditable(multiStepEditable: number): PageInfoBusinessTypeDefinitionVOPluginsList {
        this['multi_step_editable'] = multiStepEditable;
        return this;
    }
    public set multiStepEditable(multiStepEditable: number  | undefined) {
        this['multi_step_editable'] = multiStepEditable;
    }
    public get multiStepEditable(): number | undefined {
        return this['multi_step_editable'];
    }
    public withLocation(location: string): PageInfoBusinessTypeDefinitionVOPluginsList {
        this['location'] = location;
        return this;
    }
    public withPublisherUniqueId(publisherUniqueId: string): PageInfoBusinessTypeDefinitionVOPluginsList {
        this['publisher_unique_id'] = publisherUniqueId;
        return this;
    }
    public set publisherUniqueId(publisherUniqueId: string  | undefined) {
        this['publisher_unique_id'] = publisherUniqueId;
    }
    public get publisherUniqueId(): string | undefined {
        return this['publisher_unique_id'];
    }
    public withManifestVersion(manifestVersion: string): PageInfoBusinessTypeDefinitionVOPluginsList {
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