import { ShowStatisticResourceResponseBodyDatapoints } from './ShowStatisticResourceResponseBodyDatapoints';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowStatisticResourceResponse extends SdkResponse {
    private 'metric_name'?: string;
    public datapoints?: Array<ShowStatisticResourceResponseBodyDatapoints>;
    private 'total_count'?: number;
    public constructor() { 
        super();
    }
    public withMetricName(metricName: string): ShowStatisticResourceResponse {
        this['metric_name'] = metricName;
        return this;
    }
    public set metricName(metricName: string  | undefined) {
        this['metric_name'] = metricName;
    }
    public get metricName(): string | undefined {
        return this['metric_name'];
    }
    public withDatapoints(datapoints: Array<ShowStatisticResourceResponseBodyDatapoints>): ShowStatisticResourceResponse {
        this['datapoints'] = datapoints;
        return this;
    }
    public withTotalCount(totalCount: number): ShowStatisticResourceResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
}