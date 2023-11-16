import { PluginPartQueryVOListAgentPluginOutputVOData } from './PluginPartQueryVOListAgentPluginOutputVOData';


export class PluginPartQueryVOListAgentPluginOutputVO {
    private 'plugin_name'?: string;
    private 'display_name'?: string;
    public data?: Array<PluginPartQueryVOListAgentPluginOutputVOData>;
    public constructor() { 
    }
    public withPluginName(pluginName: string): PluginPartQueryVOListAgentPluginOutputVO {
        this['plugin_name'] = pluginName;
        return this;
    }
    public set pluginName(pluginName: string  | undefined) {
        this['plugin_name'] = pluginName;
    }
    public get pluginName(): string | undefined {
        return this['plugin_name'];
    }
    public withDisplayName(displayName: string): PluginPartQueryVOListAgentPluginOutputVO {
        this['display_name'] = displayName;
        return this;
    }
    public set displayName(displayName: string  | undefined) {
        this['display_name'] = displayName;
    }
    public get displayName(): string | undefined {
        return this['display_name'];
    }
    public withData(data: Array<PluginPartQueryVOListAgentPluginOutputVOData>): PluginPartQueryVOListAgentPluginOutputVO {
        this['data'] = data;
        return this;
    }
}