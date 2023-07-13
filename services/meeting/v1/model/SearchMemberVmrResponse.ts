import { Pages } from './Pages';
import { QueryVmrResultDTO } from './QueryVmrResultDTO';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class SearchMemberVmrResponse extends SdkResponse {
    public offset?: number;
    public limit?: number;
    public count?: number;
    public data?: Array<QueryVmrResultDTO>;
    public constructor() { 
        super();
    }
    public withOffset(offset: number): SearchMemberVmrResponse {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): SearchMemberVmrResponse {
        this['limit'] = limit;
        return this;
    }
    public withCount(count: number): SearchMemberVmrResponse {
        this['count'] = count;
        return this;
    }
    public withData(data: Array<QueryVmrResultDTO>): SearchMemberVmrResponse {
        this['data'] = data;
        return this;
    }
}