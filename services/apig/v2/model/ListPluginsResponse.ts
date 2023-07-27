import { BasePage } from './BasePage';
import { PluginInfo } from './PluginInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListPluginsResponse extends SdkResponse {
    public size?: number;
    public total?: number;
    public plugins?: Array<PluginInfo>;
    public constructor(size?: number, total?: number) { 
        super();
        this['size'] = size;
        this['total'] = total;
    }
    public withSize(size: number): ListPluginsResponse {
        this['size'] = size;
        return this;
    }
    public withTotal(total: number): ListPluginsResponse {
        this['total'] = total;
        return this;
    }
    public withPlugins(plugins: Array<PluginInfo>): ListPluginsResponse {
        this['plugins'] = plugins;
        return this;
    }
}