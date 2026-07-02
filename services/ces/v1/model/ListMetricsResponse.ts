import { MetricInfoList } from './MetricInfoList';
import { MetricListMetaDataResp } from './MetricListMetaDataResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListMetricsResponse extends SdkResponse {
    public metrics?: Array<MetricInfoList>;
    private 'meta_data'?: MetricListMetaDataResp;
    public constructor() { 
        super();
    }
    public withMetrics(metrics: Array<MetricInfoList>): ListMetricsResponse {
        this['metrics'] = metrics;
        return this;
    }
    public withMetaData(metaData: MetricListMetaDataResp): ListMetricsResponse {
        this['meta_data'] = metaData;
        return this;
    }
    public set metaData(metaData: MetricListMetaDataResp  | undefined) {
        this['meta_data'] = metaData;
    }
    public get metaData(): MetricListMetaDataResp | undefined {
        return this['meta_data'];
    }
}