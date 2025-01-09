import { UserMetric } from './UserMetric';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListUserUsageMetricResponse extends SdkResponse {
    public count?: number;
    public items?: Array<UserMetric>;
    public constructor() { 
        super();
    }
    public withCount(count: number): ListUserUsageMetricResponse {
        this['count'] = count;
        return this;
    }
    public withItems(items: Array<UserMetric>): ListUserUsageMetricResponse {
        this['items'] = items;
        return this;
    }
}