import { PluginBasicVO } from './PluginBasicVO';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListPluginsResponse extends SdkResponse {
    public offset?: number;
    public limit?: number;
    public total?: number;
    public data?: Array<PluginBasicVO>;
    public constructor() { 
        super();
    }
    public withOffset(offset: number): ListPluginsResponse {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListPluginsResponse {
        this['limit'] = limit;
        return this;
    }
    public withTotal(total: number): ListPluginsResponse {
        this['total'] = total;
        return this;
    }
    public withData(data: Array<PluginBasicVO>): ListPluginsResponse {
        this['data'] = data;
        return this;
    }
}