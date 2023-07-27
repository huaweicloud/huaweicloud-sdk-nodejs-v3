import { AttachedPluginInfo } from './AttachedPluginInfo';
import { BasePage } from './BasePage';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListApiAttachedPluginsResponse extends SdkResponse {
    public size?: number;
    public total?: number;
    public plugins?: Array<AttachedPluginInfo>;
    public constructor(size?: number, total?: number) { 
        super();
        this['size'] = size;
        this['total'] = total;
    }
    public withSize(size: number): ListApiAttachedPluginsResponse {
        this['size'] = size;
        return this;
    }
    public withTotal(total: number): ListApiAttachedPluginsResponse {
        this['total'] = total;
        return this;
    }
    public withPlugins(plugins: Array<AttachedPluginInfo>): ListApiAttachedPluginsResponse {
        this['plugins'] = plugins;
        return this;
    }
}