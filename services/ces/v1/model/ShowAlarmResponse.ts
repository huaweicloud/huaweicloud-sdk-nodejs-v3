import { MetricAlarms } from './MetricAlarms';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowAlarmResponse extends SdkResponse {
    private 'metric_alarms'?: Array<MetricAlarms>;
    public constructor() { 
        super();
    }
    public withMetricAlarms(metricAlarms: Array<MetricAlarms>): ShowAlarmResponse {
        this['metric_alarms'] = metricAlarms;
        return this;
    }
    public set metricAlarms(metricAlarms: Array<MetricAlarms>  | undefined) {
        this['metric_alarms'] = metricAlarms;
    }
    public get metricAlarms(): Array<MetricAlarms> | undefined {
        return this['metric_alarms'];
    }
}