import { Material } from './Material';
import { Pages } from './Pages';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class SearchMaterialsResponse extends SdkResponse {
    public offset?: number;
    public limit?: number;
    public count?: number;
    public data?: Array<Material>;
    public constructor() { 
        super();
    }
    public withOffset(offset: number): SearchMaterialsResponse {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): SearchMaterialsResponse {
        this['limit'] = limit;
        return this;
    }
    public withCount(count: number): SearchMaterialsResponse {
        this['count'] = count;
        return this;
    }
    public withData(data: Array<Material>): SearchMaterialsResponse {
        this['data'] = data;
        return this;
    }
}