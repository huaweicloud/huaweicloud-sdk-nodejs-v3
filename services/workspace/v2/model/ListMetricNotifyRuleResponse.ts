import { MetricNotifyRule } from './MetricNotifyRule';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListMetricNotifyRuleResponse extends SdkResponse {
    public count?: number;
    public items?: Array<MetricNotifyRule>;
    public constructor() { 
        super();
    }
    public withCount(count: number): ListMetricNotifyRuleResponse {
        this['count'] = count;
        return this;
    }
    public withItems(items: Array<MetricNotifyRule>): ListMetricNotifyRuleResponse {
        this['items'] = items;
        return this;
    }
}