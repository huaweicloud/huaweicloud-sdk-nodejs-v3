import { QueryRiskTrendMetric } from './QueryRiskTrendMetric';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListRiskTrendResponse extends SdkResponse {
    private 'metric_code'?: string;
    public metric?: QueryRiskTrendMetric;
    public constructor() { 
        super();
    }
    public withMetricCode(metricCode: string): ListRiskTrendResponse {
        this['metric_code'] = metricCode;
        return this;
    }
    public set metricCode(metricCode: string  | undefined) {
        this['metric_code'] = metricCode;
    }
    public get metricCode(): string | undefined {
        return this['metric_code'];
    }
    public withMetric(metric: QueryRiskTrendMetric): ListRiskTrendResponse {
        this['metric'] = metric;
        return this;
    }
}