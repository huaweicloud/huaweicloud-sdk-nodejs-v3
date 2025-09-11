import { Datapoint } from './Datapoint';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowVmMonitorResponse extends SdkResponse {
    public datapoints?: Array<Datapoint>;
    private 'metric_name'?: string;
    public max?: number;
    public average?: number;
    public constructor() { 
        super();
    }
    public withDatapoints(datapoints: Array<Datapoint>): ShowVmMonitorResponse {
        this['datapoints'] = datapoints;
        return this;
    }
    public withMetricName(metricName: string): ShowVmMonitorResponse {
        this['metric_name'] = metricName;
        return this;
    }
    public set metricName(metricName: string  | undefined) {
        this['metric_name'] = metricName;
    }
    public get metricName(): string | undefined {
        return this['metric_name'];
    }
    public withMax(max: number): ShowVmMonitorResponse {
        this['max'] = max;
        return this;
    }
    public withAverage(average: number): ShowVmMonitorResponse {
        this['average'] = average;
        return this;
    }
}