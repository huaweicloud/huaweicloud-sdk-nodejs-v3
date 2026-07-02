import { PluginEntity } from './PluginEntity';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListPluginsResponse extends SdkResponse {
    private 'plugins_modifying'?: boolean;
    public plugins?: Array<PluginEntity>;
    public constructor() { 
        super();
    }
    public withPluginsModifying(pluginsModifying: boolean): ListPluginsResponse {
        this['plugins_modifying'] = pluginsModifying;
        return this;
    }
    public set pluginsModifying(pluginsModifying: boolean  | undefined) {
        this['plugins_modifying'] = pluginsModifying;
    }
    public get pluginsModifying(): boolean | undefined {
        return this['plugins_modifying'];
    }
    public withPlugins(plugins: Array<PluginEntity>): ListPluginsResponse {
        this['plugins'] = plugins;
        return this;
    }
}