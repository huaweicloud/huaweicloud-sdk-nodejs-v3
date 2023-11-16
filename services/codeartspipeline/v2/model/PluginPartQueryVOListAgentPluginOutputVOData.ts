

export class PluginPartQueryVOListAgentPluginOutputVOData {
    private 'unique_id'?: string;
    private 'plugin_name'?: string;
    public version?: string;
    private 'workspace_id'?: string;
    private 'output_key'?: string;
    private 'output_value'?: string;
    public constructor() { 
    }
    public withUniqueId(uniqueId: string): PluginPartQueryVOListAgentPluginOutputVOData {
        this['unique_id'] = uniqueId;
        return this;
    }
    public set uniqueId(uniqueId: string  | undefined) {
        this['unique_id'] = uniqueId;
    }
    public get uniqueId(): string | undefined {
        return this['unique_id'];
    }
    public withPluginName(pluginName: string): PluginPartQueryVOListAgentPluginOutputVOData {
        this['plugin_name'] = pluginName;
        return this;
    }
    public set pluginName(pluginName: string  | undefined) {
        this['plugin_name'] = pluginName;
    }
    public get pluginName(): string | undefined {
        return this['plugin_name'];
    }
    public withVersion(version: string): PluginPartQueryVOListAgentPluginOutputVOData {
        this['version'] = version;
        return this;
    }
    public withWorkspaceId(workspaceId: string): PluginPartQueryVOListAgentPluginOutputVOData {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withOutputKey(outputKey: string): PluginPartQueryVOListAgentPluginOutputVOData {
        this['output_key'] = outputKey;
        return this;
    }
    public set outputKey(outputKey: string  | undefined) {
        this['output_key'] = outputKey;
    }
    public get outputKey(): string | undefined {
        return this['output_key'];
    }
    public withOutputValue(outputValue: string): PluginPartQueryVOListAgentPluginOutputVOData {
        this['output_value'] = outputValue;
        return this;
    }
    public set outputValue(outputValue: string  | undefined) {
        this['output_value'] = outputValue;
    }
    public get outputValue(): string | undefined {
        return this['output_value'];
    }
}