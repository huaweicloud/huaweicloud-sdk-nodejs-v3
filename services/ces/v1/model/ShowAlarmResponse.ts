import { MetricAlarmsResp } from './MetricAlarmsResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowAlarmResponse extends SdkResponse {
    private 'metric_alarms'?: Array<MetricAlarmsResp>;
    public constructor() { 
        super();
    }
    public withMetricAlarms(metricAlarms: Array<MetricAlarmsResp>): ShowAlarmResponse {
        this['metric_alarms'] = metricAlarms;
        return this;
    }
    public set metricAlarms(metricAlarms: Array<MetricAlarmsResp>  | undefined) {
        this['metric_alarms'] = metricAlarms;
    }
    public get metricAlarms(): Array<MetricAlarmsResp> | undefined {
        return this['metric_alarms'];
    }
}