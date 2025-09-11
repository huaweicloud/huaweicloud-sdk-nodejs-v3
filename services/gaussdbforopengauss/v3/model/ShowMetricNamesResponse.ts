import { MetricNameResult } from './MetricNameResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowMetricNamesResponse extends SdkResponse {
    private 'group_name'?: string;
    private 'metric_names'?: Array<MetricNameResult>;
    public constructor() { 
        super();
    }
    public withGroupName(groupName: string): ShowMetricNamesResponse {
        this['group_name'] = groupName;
        return this;
    }
    public set groupName(groupName: string  | undefined) {
        this['group_name'] = groupName;
    }
    public get groupName(): string | undefined {
        return this['group_name'];
    }
    public withMetricNames(metricNames: Array<MetricNameResult>): ShowMetricNamesResponse {
        this['metric_names'] = metricNames;
        return this;
    }
    public set metricNames(metricNames: Array<MetricNameResult>  | undefined) {
        this['metric_names'] = metricNames;
    }
    public get metricNames(): Array<MetricNameResult> | undefined {
        return this['metric_names'];
    }
}