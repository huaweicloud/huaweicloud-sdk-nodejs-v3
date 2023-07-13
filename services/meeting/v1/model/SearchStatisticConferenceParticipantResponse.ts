import { StatisticParticipateDataItem } from './StatisticParticipateDataItem';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class SearchStatisticConferenceParticipantResponse extends SdkResponse {
    public count?: number;
    public limit?: number;
    public offset?: number;
    public data?: Array<StatisticParticipateDataItem>;
    public constructor() { 
        super();
    }
    public withCount(count: number): SearchStatisticConferenceParticipantResponse {
        this['count'] = count;
        return this;
    }
    public withLimit(limit: number): SearchStatisticConferenceParticipantResponse {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): SearchStatisticConferenceParticipantResponse {
        this['offset'] = offset;
        return this;
    }
    public withData(data: Array<StatisticParticipateDataItem>): SearchStatisticConferenceParticipantResponse {
        this['data'] = data;
        return this;
    }
}