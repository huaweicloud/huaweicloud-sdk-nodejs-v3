import { Pages } from './Pages';
import { QueryCorpResultDTO } from './QueryCorpResultDTO';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class SearchCorpResponse extends SdkResponse {
    public offset?: number;
    public limit?: number;
    public count?: number;
    public data?: Array<QueryCorpResultDTO>;
    public constructor() { 
        super();
    }
    public withOffset(offset: number): SearchCorpResponse {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): SearchCorpResponse {
        this['limit'] = limit;
        return this;
    }
    public withCount(count: number): SearchCorpResponse {
        this['count'] = count;
        return this;
    }
    public withData(data: Array<QueryCorpResultDTO>): SearchCorpResponse {
        this['data'] = data;
        return this;
    }
}