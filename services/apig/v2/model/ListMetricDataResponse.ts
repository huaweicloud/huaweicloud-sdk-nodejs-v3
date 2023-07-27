import { MetricData } from './MetricData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListMetricDataResponse extends SdkResponse {
    public datapoints?: Array<MetricData>;
    public constructor() { 
        super();
    }
    public withDatapoints(datapoints: Array<MetricData>): ListMetricDataResponse {
        this['datapoints'] = datapoints;
        return this;
    }
}