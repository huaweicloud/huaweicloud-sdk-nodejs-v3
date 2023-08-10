import { MetaData } from './MetaData';
import { MetricAlarms } from './MetricAlarms';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAlarmsResponse extends SdkResponse {
    private 'metric_alarms'?: Array<MetricAlarms>;
    private 'meta_data'?: MetaData;
    public constructor() { 
        super();
    }
    public withMetricAlarms(metricAlarms: Array<MetricAlarms>): ListAlarmsResponse {
        this['metric_alarms'] = metricAlarms;
        return this;
    }
    public set metricAlarms(metricAlarms: Array<MetricAlarms>  | undefined) {
        this['metric_alarms'] = metricAlarms;
    }
    public get metricAlarms(): Array<MetricAlarms> | undefined {
        return this['metric_alarms'];
    }
    public withMetaData(metaData: MetaData): ListAlarmsResponse {
        this['meta_data'] = metaData;
        return this;
    }
    public set metaData(metaData: MetaData  | undefined) {
        this['meta_data'] = metaData;
    }
    public get metaData(): MetaData | undefined {
        return this['meta_data'];
    }
}