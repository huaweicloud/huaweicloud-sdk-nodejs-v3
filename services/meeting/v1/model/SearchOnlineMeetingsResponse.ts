import { ConferenceInfo } from './ConferenceInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class SearchOnlineMeetingsResponse extends SdkResponse {
    public offset?: number;
    public limit?: number;
    public count?: number;
    public data?: Array<ConferenceInfo>;
    public constructor() { 
        super();
    }
    public withOffset(offset: number): SearchOnlineMeetingsResponse {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): SearchOnlineMeetingsResponse {
        this['limit'] = limit;
        return this;
    }
    public withCount(count: number): SearchOnlineMeetingsResponse {
        this['count'] = count;
        return this;
    }
    public withData(data: Array<ConferenceInfo>): SearchOnlineMeetingsResponse {
        this['data'] = data;
        return this;
    }
}