import { StatisticUserDataItem } from './StatisticUserDataItem';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class SearchStatisticUserInfoResponse extends SdkResponse {
    public count?: number;
    public limit?: number;
    public offset?: number;
    public data?: Array<StatisticUserDataItem>;
    public constructor() { 
        super();
    }
    public withCount(count: number): SearchStatisticUserInfoResponse {
        this['count'] = count;
        return this;
    }
    public withLimit(limit: number): SearchStatisticUserInfoResponse {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): SearchStatisticUserInfoResponse {
        this['offset'] = offset;
        return this;
    }
    public withData(data: Array<StatisticUserDataItem>): SearchStatisticUserInfoResponse {
        this['data'] = data;
        return this;
    }
}