import { FunctionMetric } from './FunctionMetric';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListFunctionAsMetricResponse extends SdkResponse {
    public values?: Array<FunctionMetric>;
    private 'next_marker'?: number | undefined;
    public count?: number;
    public constructor() { 
        super();
    }
    public withValues(values: Array<FunctionMetric>): ListFunctionAsMetricResponse {
        this['values'] = values;
        return this;
    }
    public withNextMarker(nextMarker: number): ListFunctionAsMetricResponse {
        this['next_marker'] = nextMarker;
        return this;
    }
    public set nextMarker(nextMarker: number | undefined) {
        this['next_marker'] = nextMarker;
    }
    public get nextMarker() {
        return this['next_marker'];
    }
    public withCount(count: number): ListFunctionAsMetricResponse {
        this['count'] = count;
        return this;
    }
}