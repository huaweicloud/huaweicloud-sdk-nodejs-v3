import { Pages } from './Pages';
import { QueryResourceResultDTO } from './QueryResourceResultDTO';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class SearchCorpResourcesResponse extends SdkResponse {
    public offset?: number;
    public limit?: number;
    public count?: number;
    public data?: Array<QueryResourceResultDTO>;
    public constructor() { 
        super();
    }
    public withOffset(offset: number): SearchCorpResourcesResponse {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): SearchCorpResourcesResponse {
        this['limit'] = limit;
        return this;
    }
    public withCount(count: number): SearchCorpResourcesResponse {
        this['count'] = count;
        return this;
    }
    public withData(data: Array<QueryResourceResultDTO>): SearchCorpResourcesResponse {
        this['data'] = data;
        return this;
    }
}