import { PluginEntity } from './PluginEntity';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListPluginsResponse extends SdkResponse {
    public plugins?: Array<PluginEntity>;
    public constructor() { 
        super();
    }
    public withPlugins(plugins: Array<PluginEntity>): ListPluginsResponse {
        this['plugins'] = plugins;
        return this;
    }
}