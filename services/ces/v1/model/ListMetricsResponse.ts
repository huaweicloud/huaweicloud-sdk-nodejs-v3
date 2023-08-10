import { MetaData } from './MetaData';
import { MetricInfoList } from './MetricInfoList';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListMetricsResponse extends SdkResponse {
    public metrics?: Array<MetricInfoList>;
    private 'meta_data'?: MetaData;
    public constructor() { 
        super();
    }
    public withMetrics(metrics: Array<MetricInfoList>): ListMetricsResponse {
        this['metrics'] = metrics;
        return this;
    }
    public withMetaData(metaData: MetaData): ListMetricsResponse {
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