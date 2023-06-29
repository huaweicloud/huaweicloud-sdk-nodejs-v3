import { Pages } from './Pages';
import { QueryResourceResultDTO } from './QueryResourceResultDTO';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class SearchResourceResponse extends SdkResponse {
    public offset?: number;
    public limit?: number;
    public count?: number;
    public data?: Array<QueryResourceResultDTO>;
    public constructor() { 
        super();
    }
    public withOffset(offset: number): SearchResourceResponse {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): SearchResourceResponse {
        this['limit'] = limit;
        return this;
    }
    public withCount(count: number): SearchResourceResponse {
        this['count'] = count;
        return this;
    }
    public withData(data: Array<QueryResourceResultDTO>): SearchResourceResponse {
        this['data'] = data;
        return this;
    }
}