import { ShowStatisticInterfaceResponseBodyMetrics } from './ShowStatisticInterfaceResponseBodyMetrics';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowStatisticInterfaceResponse extends SdkResponse {
    private 'metric_name'?: string;
    public metrics?: Array<ShowStatisticInterfaceResponseBodyMetrics>;
    public constructor() { 
        super();
    }
    public withMetricName(metricName: string): ShowStatisticInterfaceResponse {
        this['metric_name'] = metricName;
        return this;
    }
    public set metricName(metricName: string  | undefined) {
        this['metric_name'] = metricName;
    }
    public get metricName(): string | undefined {
        return this['metric_name'];
    }
    public withMetrics(metrics: Array<ShowStatisticInterfaceResponseBodyMetrics>): ShowStatisticInterfaceResponse {
        this['metrics'] = metrics;
        return this;
    }
}