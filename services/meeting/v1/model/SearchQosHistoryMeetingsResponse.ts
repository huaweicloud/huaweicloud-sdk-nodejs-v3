import { QosConferenceInfo } from './QosConferenceInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class SearchQosHistoryMeetingsResponse extends SdkResponse {
    public count?: number;
    public limit?: number;
    public offset?: number;
    public data?: Array<QosConferenceInfo>;
    public constructor() { 
        super();
    }
    public withCount(count: number): SearchQosHistoryMeetingsResponse {
        this['count'] = count;
        return this;
    }
    public withLimit(limit: number): SearchQosHistoryMeetingsResponse {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): SearchQosHistoryMeetingsResponse {
        this['offset'] = offset;
        return this;
    }
    public withData(data: Array<QosConferenceInfo>): SearchQosHistoryMeetingsResponse {
        this['data'] = data;
        return this;
    }
}