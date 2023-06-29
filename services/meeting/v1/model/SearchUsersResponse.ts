import { Pages } from './Pages';
import { SearchUserResultDTO } from './SearchUserResultDTO';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class SearchUsersResponse extends SdkResponse {
    public offset?: number;
    public limit?: number;
    public count?: number;
    public data?: Array<SearchUserResultDTO>;
    public constructor() { 
        super();
    }
    public withOffset(offset: number): SearchUsersResponse {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): SearchUsersResponse {
        this['limit'] = limit;
        return this;
    }
    public withCount(count: number): SearchUsersResponse {
        this['count'] = count;
        return this;
    }
    public withData(data: Array<SearchUserResultDTO>): SearchUsersResponse {
        this['data'] = data;
        return this;
    }
}