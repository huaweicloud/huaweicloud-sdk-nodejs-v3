import { MetricItem } from './MetricItem';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class GetInstancesOpsMetricNamesResponse extends SdkResponse {
    public metrics?: Array<MetricItem>;
    public namespace?: string;
    public dim?: string;
    public constructor() { 
        super();
    }
    public withMetrics(metrics: Array<MetricItem>): GetInstancesOpsMetricNamesResponse {
        this['metrics'] = metrics;
        return this;
    }
    public withNamespace(namespace: string): GetInstancesOpsMetricNamesResponse {
        this['namespace'] = namespace;
        return this;
    }
    public withDim(dim: string): GetInstancesOpsMetricNamesResponse {
        this['dim'] = dim;
        return this;
    }
}