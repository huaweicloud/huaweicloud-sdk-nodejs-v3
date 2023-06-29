import { Pages } from './Pages';
import { QueryOrgVmrResultDTO } from './QueryOrgVmrResultDTO';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class SearchCorpVmrResponse extends SdkResponse {
    public offset?: number;
    public limit?: number;
    public count?: number;
    public data?: Array<QueryOrgVmrResultDTO>;
    public constructor() { 
        super();
    }
    public withOffset(offset: number): SearchCorpVmrResponse {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): SearchCorpVmrResponse {
        this['limit'] = limit;
        return this;
    }
    public withCount(count: number): SearchCorpVmrResponse {
        this['count'] = count;
        return this;
    }
    public withData(data: Array<QueryOrgVmrResultDTO>): SearchCorpVmrResponse {
        this['data'] = data;
        return this;
    }
}