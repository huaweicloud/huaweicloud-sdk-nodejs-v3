import { QosConferenceInfo } from './QosConferenceInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class SearchQosOnlineMeetingsResponse extends SdkResponse {
    public count?: number;
    public limit?: number;
    public offset?: number;
    public data?: Array<QosConferenceInfo>;
    public constructor() { 
        super();
    }
    public withCount(count: number): SearchQosOnlineMeetingsResponse {
        this['count'] = count;
        return this;
    }
    public withLimit(limit: number): SearchQosOnlineMeetingsResponse {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): SearchQosOnlineMeetingsResponse {
        this['offset'] = offset;
        return this;
    }
    public withData(data: Array<QosConferenceInfo>): SearchQosOnlineMeetingsResponse {
        this['data'] = data;
        return this;
    }
}