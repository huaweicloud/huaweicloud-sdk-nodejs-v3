import { PageInfoOptionalSinglePluginVOData } from './PageInfoOptionalSinglePluginVOData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListBasePluginsResponse extends SdkResponse {
    public offset?: number;
    public limit?: number;
    public total?: number;
    public data?: Array<PageInfoOptionalSinglePluginVOData>;
    public constructor() { 
        super();
    }
    public withOffset(offset: number): ListBasePluginsResponse {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListBasePluginsResponse {
        this['limit'] = limit;
        return this;
    }
    public withTotal(total: number): ListBasePluginsResponse {
        this['total'] = total;
        return this;
    }
    public withData(data: Array<PageInfoOptionalSinglePluginVOData>): ListBasePluginsResponse {
        this['data'] = data;
        return this;
    }
}