import { PluginTypeEnum } from './PluginTypeEnum';


export class DefaultPluginInfo {
    private 'plugin_type'?: PluginTypeEnum;
    private 'support_default'?: boolean;
    public constructor() { 
    }
    public withPluginType(pluginType: PluginTypeEnum): DefaultPluginInfo {
        this['plugin_type'] = pluginType;
        return this;
    }
    public set pluginType(pluginType: PluginTypeEnum  | undefined) {
        this['plugin_type'] = pluginType;
    }
    public get pluginType(): PluginTypeEnum | undefined {
        return this['plugin_type'];
    }
    public withSupportDefault(supportDefault: boolean): DefaultPluginInfo {
        this['support_default'] = supportDefault;
        return this;
    }
    public set supportDefault(supportDefault: boolean  | undefined) {
        this['support_default'] = supportDefault;
    }
    public get supportDefault(): boolean | undefined {
        return this['support_default'];
    }
}