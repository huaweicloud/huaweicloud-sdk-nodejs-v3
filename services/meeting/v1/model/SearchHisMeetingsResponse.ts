import { ConferenceInfo } from './ConferenceInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class SearchHisMeetingsResponse extends SdkResponse {
    public offset?: number;
    public limit?: number;
    public count?: number;
    public data?: Array<ConferenceInfo>;
    public constructor() { 
        super();
    }
    public withOffset(offset: number): SearchHisMeetingsResponse {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): SearchHisMeetingsResponse {
        this['limit'] = limit;
        return this;
    }
    public withCount(count: number): SearchHisMeetingsResponse {
        this['count'] = count;
        return this;
    }
    public withData(data: Array<ConferenceInfo>): SearchHisMeetingsResponse {
        this['data'] = data;
        return this;
    }
}