import { ConferenceInfo } from './ConferenceInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class SearchMeetingsResponse extends SdkResponse {
    public offset?: number;
    public limit?: number;
    public count?: number;
    public data?: Array<ConferenceInfo>;
    public constructor() { 
        super();
    }
    public withOffset(offset: number): SearchMeetingsResponse {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): SearchMeetingsResponse {
        this['limit'] = limit;
        return this;
    }
    public withCount(count: number): SearchMeetingsResponse {
        this['count'] = count;
        return this;
    }
    public withData(data: Array<ConferenceInfo>): SearchMeetingsResponse {
        this['data'] = data;
        return this;
    }
}