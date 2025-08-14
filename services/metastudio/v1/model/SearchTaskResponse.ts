import { Pages } from './Pages';
import { QueryTaskResultDTO } from './QueryTaskResultDTO';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class SearchTaskResponse extends SdkResponse {
    public offset?: number;
    public limit?: number;
    public count?: number;
    public data?: Array<QueryTaskResultDTO>;
    public constructor() { 
        super();
    }
    public withOffset(offset: number): SearchTaskResponse {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): SearchTaskResponse {
        this['limit'] = limit;
        return this;
    }
    public withCount(count: number): SearchTaskResponse {
        this['count'] = count;
        return this;
    }
    public withData(data: Array<QueryTaskResultDTO>): SearchTaskResponse {
        this['data'] = data;
        return this;
    }
}