import { PluginPartQueryVOListAgentPluginInputVOData } from './PluginPartQueryVOListAgentPluginInputVOData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowPluginVersionResponse extends SdkResponse {
    private 'plugin_name'?: string;
    private 'display_name'?: string;
    private 'op_user'?: string;
    private 'op_time'?: string;
    public version?: string;
    private 'unique_id'?: string;
    private 'version_description'?: string;
    private 'version_attribution'?: string;
    private 'plugin_composition_type'?: string;
    private 'plugin_attribution'?: string;
    private 'input_info'?: Array<PluginPartQueryVOListAgentPluginInputVOData>;
    private 'plugin_execution'?: object;
    private 'runtime_attribution'?: string;
    public constructor() { 
        super();
    }
    public withPluginName(pluginName: string): ShowPluginVersionResponse {
        this['plugin_name'] = pluginName;
        return this;
    }
    public set pluginName(pluginName: string  | undefined) {
        this['plugin_name'] = pluginName;
    }
    public get pluginName(): string | undefined {
        return this['plugin_name'];
    }
    public withDisplayName(displayName: string): ShowPluginVersionResponse {
        this['display_name'] = displayName;
        return this;
    }
    public set displayName(displayName: string  | undefined) {
        this['display_name'] = displayName;
    }
    public get displayName(): string | undefined {
        return this['display_name'];
    }
    public withOpUser(opUser: string): ShowPluginVersionResponse {
        this['op_user'] = opUser;
        return this;
    }
    public set opUser(opUser: string  | undefined) {
        this['op_user'] = opUser;
    }
    public get opUser(): string | undefined {
        return this['op_user'];
    }
    public withOpTime(opTime: string): ShowPluginVersionResponse {
        this['op_time'] = opTime;
        return this;
    }
    public set opTime(opTime: string  | undefined) {
        this['op_time'] = opTime;
    }
    public get opTime(): string | undefined {
        return this['op_time'];
    }
    public withVersion(version: string): ShowPluginVersionResponse {
        this['version'] = version;
        return this;
    }
    public withUniqueId(uniqueId: string): ShowPluginVersionResponse {
        this['unique_id'] = uniqueId;
        return this;
    }
    public set uniqueId(uniqueId: string  | undefined) {
        this['unique_id'] = uniqueId;
    }
    public get uniqueId(): string | undefined {
        return this['unique_id'];
    }
    public withVersionDescription(versionDescription: string): ShowPluginVersionResponse {
        this['version_description'] = versionDescription;
        return this;
    }
    public set versionDescription(versionDescription: string  | undefined) {
        this['version_description'] = versionDescription;
    }
    public get versionDescription(): string | undefined {
        return this['version_description'];
    }
    public withVersionAttribution(versionAttribution: string): ShowPluginVersionResponse {
        this['version_attribution'] = versionAttribution;
        return this;
    }
    public set versionAttribution(versionAttribution: string  | undefined) {
        this['version_attribution'] = versionAttribution;
    }
    public get versionAttribution(): string | undefined {
        return this['version_attribution'];
    }
    public withPluginCompositionType(pluginCompositionType: string): ShowPluginVersionResponse {
        this['plugin_composition_type'] = pluginCompositionType;
        return this;
    }
    public set pluginCompositionType(pluginCompositionType: string  | undefined) {
        this['plugin_composition_type'] = pluginCompositionType;
    }
    public get pluginCompositionType(): string | undefined {
        return this['plugin_composition_type'];
    }
    public withPluginAttribution(pluginAttribution: string): ShowPluginVersionResponse {
        this['plugin_attribution'] = pluginAttribution;
        return this;
    }
    public set pluginAttribution(pluginAttribution: string  | undefined) {
        this['plugin_attribution'] = pluginAttribution;
    }
    public get pluginAttribution(): string | undefined {
        return this['plugin_attribution'];
    }
    public withInputInfo(inputInfo: Array<PluginPartQueryVOListAgentPluginInputVOData>): ShowPluginVersionResponse {
        this['input_info'] = inputInfo;
        return this;
    }
    public set inputInfo(inputInfo: Array<PluginPartQueryVOListAgentPluginInputVOData>  | undefined) {
        this['input_info'] = inputInfo;
    }
    public get inputInfo(): Array<PluginPartQueryVOListAgentPluginInputVOData> | undefined {
        return this['input_info'];
    }
    public withPluginExecution(pluginExecution: object): ShowPluginVersionResponse {
        this['plugin_execution'] = pluginExecution;
        return this;
    }
    public set pluginExecution(pluginExecution: object  | undefined) {
        this['plugin_execution'] = pluginExecution;
    }
    public get pluginExecution(): object | undefined {
        return this['plugin_execution'];
    }
    public withRuntimeAttribution(runtimeAttribution: string): ShowPluginVersionResponse {
        this['runtime_attribution'] = runtimeAttribution;
        return this;
    }
    public set runtimeAttribution(runtimeAttribution: string  | undefined) {
        this['runtime_attribution'] = runtimeAttribution;
    }
    public get runtimeAttribution(): string | undefined {
        return this['runtime_attribution'];
    }
}