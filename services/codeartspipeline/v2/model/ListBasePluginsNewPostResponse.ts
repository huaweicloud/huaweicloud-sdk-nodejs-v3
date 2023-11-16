import { PageInfoBusinessTypeDefinitionVOData } from './PageInfoBusinessTypeDefinitionVOData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListBasePluginsNewPostResponse extends SdkResponse {
    public offset?: number;
    public limit?: number;
    public total?: number;
    public data?: Array<PageInfoBusinessTypeDefinitionVOData>;
    public constructor() { 
        super();
    }
    public withOffset(offset: number): ListBasePluginsNewPostResponse {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListBasePluginsNewPostResponse {
        this['limit'] = limit;
        return this;
    }
    public withTotal(total: number): ListBasePluginsNewPostResponse {
        this['total'] = total;
        return this;
    }
    public withData(data: Array<PageInfoBusinessTypeDefinitionVOData>): ListBasePluginsNewPostResponse {
        this['data'] = data;
        return this;
    }
}