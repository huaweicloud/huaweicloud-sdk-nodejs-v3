import { StatisticResourceDataItem } from './StatisticResourceDataItem';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class SearchStatisticResourceInfoResponse extends SdkResponse {
    public count?: number;
    public limit?: number;
    public offset?: number;
    public data?: Array<StatisticResourceDataItem>;
    public constructor() { 
        super();
    }
    public withCount(count: number): SearchStatisticResourceInfoResponse {
        this['count'] = count;
        return this;
    }
    public withLimit(limit: number): SearchStatisticResourceInfoResponse {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): SearchStatisticResourceInfoResponse {
        this['offset'] = offset;
        return this;
    }
    public withData(data: Array<StatisticResourceDataItem>): SearchStatisticResourceInfoResponse {
        this['data'] = data;
        return this;
    }
}