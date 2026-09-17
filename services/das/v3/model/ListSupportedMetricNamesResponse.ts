import { MetricNamesSupportItem } from './MetricNamesSupportItem';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSupportedMetricNamesResponse extends SdkResponse {
    public items?: Array<MetricNamesSupportItem>;
    public constructor() { 
        super();
    }
    public withItems(items: Array<MetricNamesSupportItem>): ListSupportedMetricNamesResponse {
        this['items'] = items;
        return this;
    }
}