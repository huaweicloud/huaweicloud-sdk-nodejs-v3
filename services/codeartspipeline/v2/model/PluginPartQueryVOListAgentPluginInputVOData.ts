import { ExtensionValidation } from './ExtensionValidation';


export class PluginPartQueryVOListAgentPluginInputVOData {
    private 'unique_id'?: string;
    public name?: string;
    private 'default_value'?: string;
    private 'plugin_name'?: string;
    public version?: string;
    public type?: string;
    private 'workspace_id'?: string;
    public validation?: ExtensionValidation;
    private 'layout_content'?: string;
    public constructor() { 
    }
    public withUniqueId(uniqueId: string): PluginPartQueryVOListAgentPluginInputVOData {
        this['unique_id'] = uniqueId;
        return this;
    }
    public set uniqueId(uniqueId: string  | undefined) {
        this['unique_id'] = uniqueId;
    }
    public get uniqueId(): string | undefined {
        return this['unique_id'];
    }
    public withName(name: string): PluginPartQueryVOListAgentPluginInputVOData {
        this['name'] = name;
        return this;
    }
    public withDefaultValue(defaultValue: string): PluginPartQueryVOListAgentPluginInputVOData {
        this['default_value'] = defaultValue;
        return this;
    }
    public set defaultValue(defaultValue: string  | undefined) {
        this['default_value'] = defaultValue;
    }
    public get defaultValue(): string | undefined {
        return this['default_value'];
    }
    public withPluginName(pluginName: string): PluginPartQueryVOListAgentPluginInputVOData {
        this['plugin_name'] = pluginName;
        return this;
    }
    public set pluginName(pluginName: string  | undefined) {
        this['plugin_name'] = pluginName;
    }
    public get pluginName(): string | undefined {
        return this['plugin_name'];
    }
    public withVersion(version: string): PluginPartQueryVOListAgentPluginInputVOData {
        this['version'] = version;
        return this;
    }
    public withType(type: string): PluginPartQueryVOListAgentPluginInputVOData {
        this['type'] = type;
        return this;
    }
    public withWorkspaceId(workspaceId: string): PluginPartQueryVOListAgentPluginInputVOData {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withValidation(validation: ExtensionValidation): PluginPartQueryVOListAgentPluginInputVOData {
        this['validation'] = validation;
        return this;
    }
    public withLayoutContent(layoutContent: string): PluginPartQueryVOListAgentPluginInputVOData {
        this['layout_content'] = layoutContent;
        return this;
    }
    public set layoutContent(layoutContent: string  | undefined) {
        this['layout_content'] = layoutContent;
    }
    public get layoutContent(): string | undefined {
        return this['layout_content'];
    }
}