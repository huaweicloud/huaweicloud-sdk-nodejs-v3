import { ListFunctionStatisticsResponseBody } from './ListFunctionStatisticsResponseBody';
import { MonthUsed } from './MonthUsed';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListStatisticsResponse extends SdkResponse {
    public count?: Array<MonthUsed>;
    public gbs?: Array<MonthUsed>;
    private 'gpu_gbs'?: Array<MonthUsed>;
    public statistics?: ListFunctionStatisticsResponseBody;
    public constructor() { 
        super();
    }
    public withCount(count: Array<MonthUsed>): ListStatisticsResponse {
        this['count'] = count;
        return this;
    }
    public withGbs(gbs: Array<MonthUsed>): ListStatisticsResponse {
        this['gbs'] = gbs;
        return this;
    }
    public withGpuGbs(gpuGbs: Array<MonthUsed>): ListStatisticsResponse {
        this['gpu_gbs'] = gpuGbs;
        return this;
    }
    public set gpuGbs(gpuGbs: Array<MonthUsed>  | undefined) {
        this['gpu_gbs'] = gpuGbs;
    }
    public get gpuGbs(): Array<MonthUsed> | undefined {
        return this['gpu_gbs'];
    }
    public withStatistics(statistics: ListFunctionStatisticsResponseBody): ListStatisticsResponse {
        this['statistics'] = statistics;
        return this;
    }
}