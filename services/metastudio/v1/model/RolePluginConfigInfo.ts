import { PluginSourceEnum } from './PluginSourceEnum';
import { PluginTypeEnum } from './PluginTypeEnum';


export class RolePluginConfigInfo {
    private 'plugin_type'?: PluginTypeEnum;
    private 'plugin_source'?: PluginSourceEnum;
    private 'plugin_config_id'?: string;
    public constructor(pluginType?: PluginTypeEnum, pluginSource?: PluginSourceEnum) { 
        this['plugin_type'] = pluginType;
        this['plugin_source'] = pluginSource;
    }
    public withPluginType(pluginType: PluginTypeEnum): RolePluginConfigInfo {
        this['plugin_type'] = pluginType;
        return this;
    }
    public set pluginType(pluginType: PluginTypeEnum  | undefined) {
        this['plugin_type'] = pluginType;
    }
    public get pluginType(): PluginTypeEnum | undefined {
        return this['plugin_type'];
    }
    public withPluginSource(pluginSource: PluginSourceEnum): RolePluginConfigInfo {
        this['plugin_source'] = pluginSource;
        return this;
    }
    public set pluginSource(pluginSource: PluginSourceEnum  | undefined) {
        this['plugin_source'] = pluginSource;
    }
    public get pluginSource(): PluginSourceEnum | undefined {
        return this['plugin_source'];
    }
    public withPluginConfigId(pluginConfigId: string): RolePluginConfigInfo {
        this['plugin_config_id'] = pluginConfigId;
        return this;
    }
    public set pluginConfigId(pluginConfigId: string  | undefined) {
        this['plugin_config_id'] = pluginConfigId;
    }
    public get pluginConfigId(): string | undefined {
        return this['plugin_config_id'];
    }
}