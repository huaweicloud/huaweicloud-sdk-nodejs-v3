import { PluginDTOExecutionInfo } from './PluginDTOExecutionInfo';
import { PluginDTOInputInfo } from './PluginDTOInputInfo';


export class PluginDTO {
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
    public version?: string;
    private 'version_description'?: string;
    private 'execution_info'?: PluginDTOExecutionInfo;
    private 'input_info'?: Array<PluginDTOInputInfo>;
    public constructor() { 
    }
    public withUniqueId(uniqueId: string): PluginDTO {
        this['unique_id'] = uniqueId;
        return this;
    }
    public set uniqueId(uniqueId: string  | undefined) {
        this['unique_id'] = uniqueId;
    }
    public get uniqueId(): string | undefined {
        return this['unique_id'];
    }
    public withIconUrl(iconUrl: string): PluginDTO {
        this['icon_url'] = iconUrl;
        return this;
    }
    public set iconUrl(iconUrl: string  | undefined) {
        this['icon_url'] = iconUrl;
    }
    public get iconUrl(): string | undefined {
        return this['icon_url'];
    }
    public withRuntimeAttribution(runtimeAttribution: string): PluginDTO {
        this['runtime_attribution'] = runtimeAttribution;
        return this;
    }
    public set runtimeAttribution(runtimeAttribution: string  | undefined) {
        this['runtime_attribution'] = runtimeAttribution;
    }
    public get runtimeAttribution(): string | undefined {
        return this['runtime_attribution'];
    }
    public withPluginName(pluginName: string): PluginDTO {
        this['plugin_name'] = pluginName;
        return this;
    }
    public set pluginName(pluginName: string  | undefined) {
        this['plugin_name'] = pluginName;
    }
    public get pluginName(): string | undefined {
        return this['plugin_name'];
    }
    public withDisplayName(displayName: string): PluginDTO {
        this['display_name'] = displayName;
        return this;
    }
    public set displayName(displayName: string  | undefined) {
        this['display_name'] = displayName;
    }
    public get displayName(): string | undefined {
        return this['display_name'];
    }
    public withBusinessType(businessType: string): PluginDTO {
        this['business_type'] = businessType;
        return this;
    }
    public set businessType(businessType: string  | undefined) {
        this['business_type'] = businessType;
    }
    public get businessType(): string | undefined {
        return this['business_type'];
    }
    public withBusinessTypeDisplayName(businessTypeDisplayName: string): PluginDTO {
        this['business_type_display_name'] = businessTypeDisplayName;
        return this;
    }
    public set businessTypeDisplayName(businessTypeDisplayName: string  | undefined) {
        this['business_type_display_name'] = businessTypeDisplayName;
    }
    public get businessTypeDisplayName(): string | undefined {
        return this['business_type_display_name'];
    }
    public withDescription(description: string): PluginDTO {
        this['description'] = description;
        return this;
    }
    public withIsPrivate(isPrivate: number): PluginDTO {
        this['is_private'] = isPrivate;
        return this;
    }
    public set isPrivate(isPrivate: number  | undefined) {
        this['is_private'] = isPrivate;
    }
    public get isPrivate(): number | undefined {
        return this['is_private'];
    }
    public withRegion(region: string): PluginDTO {
        this['region'] = region;
        return this;
    }
    public withMaintainers(maintainers: string): PluginDTO {
        this['maintainers'] = maintainers;
        return this;
    }
    public withVersion(version: string): PluginDTO {
        this['version'] = version;
        return this;
    }
    public withVersionDescription(versionDescription: string): PluginDTO {
        this['version_description'] = versionDescription;
        return this;
    }
    public set versionDescription(versionDescription: string  | undefined) {
        this['version_description'] = versionDescription;
    }
    public get versionDescription(): string | undefined {
        return this['version_description'];
    }
    public withExecutionInfo(executionInfo: PluginDTOExecutionInfo): PluginDTO {
        this['execution_info'] = executionInfo;
        return this;
    }
    public set executionInfo(executionInfo: PluginDTOExecutionInfo  | undefined) {
        this['execution_info'] = executionInfo;
    }
    public get executionInfo(): PluginDTOExecutionInfo | undefined {
        return this['execution_info'];
    }
    public withInputInfo(inputInfo: Array<PluginDTOInputInfo>): PluginDTO {
        this['input_info'] = inputInfo;
        return this;
    }
    public set inputInfo(inputInfo: Array<PluginDTOInputInfo>  | undefined) {
        this['input_info'] = inputInfo;
    }
    public get inputInfo(): Array<PluginDTOInputInfo> | undefined {
        return this['input_info'];
    }
}