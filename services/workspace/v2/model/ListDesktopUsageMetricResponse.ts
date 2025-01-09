import { DesktopMetric } from './DesktopMetric';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListDesktopUsageMetricResponse extends SdkResponse {
    public count?: number;
    public items?: Array<DesktopMetric>;
    public constructor() { 
        super();
    }
    public withCount(count: number): ListDesktopUsageMetricResponse {
        this['count'] = count;
        return this;
    }
    public withItems(items: Array<DesktopMetric>): ListDesktopUsageMetricResponse {
        this['items'] = items;
        return this;
    }
}