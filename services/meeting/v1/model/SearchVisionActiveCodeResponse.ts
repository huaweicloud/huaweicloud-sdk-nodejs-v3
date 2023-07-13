import { Pages } from './Pages';
import { QueryVisionActiveCodeResultDTO } from './QueryVisionActiveCodeResultDTO';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class SearchVisionActiveCodeResponse extends SdkResponse {
    public offset?: number;
    public limit?: number;
    public count?: number;
    public data?: Array<QueryVisionActiveCodeResultDTO>;
    public constructor() { 
        super();
    }
    public withOffset(offset: number): SearchVisionActiveCodeResponse {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): SearchVisionActiveCodeResponse {
        this['limit'] = limit;
        return this;
    }
    public withCount(count: number): SearchVisionActiveCodeResponse {
        this['count'] = count;
        return this;
    }
    public withData(data: Array<QueryVisionActiveCodeResultDTO>): SearchVisionActiveCodeResponse {
        this['data'] = data;
        return this;
    }
}