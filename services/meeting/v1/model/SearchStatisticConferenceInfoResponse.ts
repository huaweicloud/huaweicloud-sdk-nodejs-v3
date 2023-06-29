import { StatisticConferenceDataItem } from './StatisticConferenceDataItem';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class SearchStatisticConferenceInfoResponse extends SdkResponse {
    public count?: number;
    public limit?: number;
    public offset?: number;
    public data?: Array<StatisticConferenceDataItem>;
    public constructor() { 
        super();
    }
    public withCount(count: number): SearchStatisticConferenceInfoResponse {
        this['count'] = count;
        return this;
    }
    public withLimit(limit: number): SearchStatisticConferenceInfoResponse {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): SearchStatisticConferenceInfoResponse {
        this['offset'] = offset;
        return this;
    }
    public withData(data: Array<StatisticConferenceDataItem>): SearchStatisticConferenceInfoResponse {
        this['data'] = data;
        return this;
    }
}