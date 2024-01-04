import { MetaDataSeries } from './MetaDataSeries';
import { MetricItemResultAPI } from './MetricItemResultAPI';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListMetricItemsResponse extends SdkResponse {
    public metaData?: MetaDataSeries;
    public metrics?: Array<MetricItemResultAPI>;
    public constructor() { 
        super();
    }
    public withMetaData(metaData: MetaDataSeries): ListMetricItemsResponse {
        this['metaData'] = metaData;
        return this;
    }
    public withMetrics(metrics: Array<MetricItemResultAPI>): ListMetricItemsResponse {
        this['metrics'] = metrics;
        return this;
    }
}