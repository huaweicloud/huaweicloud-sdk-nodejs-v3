import { Datapoint } from './Datapoint';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowMetricDataResponse extends SdkResponse {
    public datapoints?: Array<Datapoint>;
    private 'metric_name'?: string;
    public constructor() { 
        super();
    }
    public withDatapoints(datapoints: Array<Datapoint>): ShowMetricDataResponse {
        this['datapoints'] = datapoints;
        return this;
    }
    public withMetricName(metricName: string): ShowMetricDataResponse {
        this['metric_name'] = metricName;
        return this;
    }
    public set metricName(metricName: string  | undefined) {
        this['metric_name'] = metricName;
    }
    public get metricName(): string | undefined {
        return this['metric_name'];
    }
}