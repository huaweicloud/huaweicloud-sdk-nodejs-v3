import { PluginOperApiInfo } from './PluginOperApiInfo';


export class AttachApiToPluginRequest {
    private 'instance_id'?: string;
    private 'plugin_id'?: string;
    public body?: PluginOperApiInfo;
    public constructor(instanceId?: string, pluginId?: string) { 
        this['instance_id'] = instanceId;
        this['plugin_id'] = pluginId;
    }
    public withInstanceId(instanceId: string): AttachApiToPluginRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withPluginId(pluginId: string): AttachApiToPluginRequest {
        this['plugin_id'] = pluginId;
        return this;
    }
    public set pluginId(pluginId: string  | undefined) {
        this['plugin_id'] = pluginId;
    }
    public get pluginId(): string | undefined {
        return this['plugin_id'];
    }
    public withBody(body: PluginOperApiInfo): AttachApiToPluginRequest {
        this['body'] = body;
        return this;
    }
}