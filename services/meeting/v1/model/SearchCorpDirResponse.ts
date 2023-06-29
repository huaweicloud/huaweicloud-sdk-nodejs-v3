import { Pages } from './Pages';
import { UserDTO } from './UserDTO';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class SearchCorpDirResponse extends SdkResponse {
    public offset?: number;
    public limit?: number;
    public count?: number;
    public data?: Array<UserDTO>;
    public constructor() { 
        super();
    }
    public withOffset(offset: number): SearchCorpDirResponse {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): SearchCorpDirResponse {
        this['limit'] = limit;
        return this;
    }
    public withCount(count: number): SearchCorpDirResponse {
        this['count'] = count;
        return this;
    }
    public withData(data: Array<UserDTO>): SearchCorpDirResponse {
        this['data'] = data;
        return this;
    }
}