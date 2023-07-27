import { BasePage } from './BasePage';
import { PluginInfo } from './PluginInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListApiAttachablePluginsResponse extends SdkResponse {
    public size?: number;
    public total?: number;
    public plugins?: Array<PluginInfo>;
    public constructor(size?: number, total?: number) { 
        super();
        this['size'] = size;
        this['total'] = total;
    }
    public withSize(size: number): ListApiAttachablePluginsResponse {
        this['size'] = size;
        return this;
    }
    public withTotal(total: number): ListApiAttachablePluginsResponse {
        this['total'] = total;
        return this;
    }
    public withPlugins(plugins: Array<PluginInfo>): ListApiAttachablePluginsResponse {
        this['plugins'] = plugins;
        return this;
    }
}