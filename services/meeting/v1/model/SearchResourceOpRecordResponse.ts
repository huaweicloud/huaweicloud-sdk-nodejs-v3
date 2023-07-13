import { Pages } from './Pages';
import { QueryResourceResultDTO } from './QueryResourceResultDTO';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class SearchResourceOpRecordResponse extends SdkResponse {
    public offset?: number;
    public limit?: number;
    public count?: number;
    public data?: Array<QueryResourceResultDTO>;
    public constructor() { 
        super();
    }
    public withOffset(offset: number): SearchResourceOpRecordResponse {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): SearchResourceOpRecordResponse {
        this['limit'] = limit;
        return this;
    }
    public withCount(count: number): SearchResourceOpRecordResponse {
        this['count'] = count;
        return this;
    }
    public withData(data: Array<QueryResourceResultDTO>): SearchResourceOpRecordResponse {
        this['data'] = data;
        return this;
    }
}