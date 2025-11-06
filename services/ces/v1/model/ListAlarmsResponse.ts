import { MetaDataResp } from './MetaDataResp';
import { MetricAlarmsResp } from './MetricAlarmsResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAlarmsResponse extends SdkResponse {
    private 'metric_alarms'?: Array<MetricAlarmsResp>;
    private 'meta_data'?: MetaDataResp;
    public constructor() { 
        super();
    }
    public withMetricAlarms(metricAlarms: Array<MetricAlarmsResp>): ListAlarmsResponse {
        this['metric_alarms'] = metricAlarms;
        return this;
    }
    public set metricAlarms(metricAlarms: Array<MetricAlarmsResp>  | undefined) {
        this['metric_alarms'] = metricAlarms;
    }
    public get metricAlarms(): Array<MetricAlarmsResp> | undefined {
        return this['metric_alarms'];
    }
    public withMetaData(metaData: MetaDataResp): ListAlarmsResponse {
        this['meta_data'] = metaData;
        return this;
    }
    public set metaData(metaData: MetaDataResp  | undefined) {
        this['meta_data'] = metaData;
    }
    public get metaData(): MetaDataResp | undefined {
        return this['meta_data'];
    }
}