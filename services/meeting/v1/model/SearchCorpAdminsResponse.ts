import { Pages } from './Pages';
import { QueryCorpAdminResultDTO } from './QueryCorpAdminResultDTO';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class SearchCorpAdminsResponse extends SdkResponse {
    public offset?: number;
    public limit?: number;
    public count?: number;
    public data?: Array<QueryCorpAdminResultDTO>;
    public constructor() { 
        super();
    }
    public withOffset(offset: number): SearchCorpAdminsResponse {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): SearchCorpAdminsResponse {
        this['limit'] = limit;
        return this;
    }
    public withCount(count: number): SearchCorpAdminsResponse {
        this['count'] = count;
        return this;
    }
    public withData(data: Array<QueryCorpAdminResultDTO>): SearchCorpAdminsResponse {
        this['data'] = data;
        return this;
    }
}