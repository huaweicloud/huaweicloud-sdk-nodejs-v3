import { IndexUsagePercent } from './IndexUsagePercent';
import { IndexUsageTrendPoint } from './IndexUsageTrendPoint';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowIndexUsageTrendResponse extends SdkResponse {
    private 'trend_list'?: Array<IndexUsageTrendPoint>;
    private 'fragmentation_trend'?: IndexUsagePercent;
    private 'usage_trend'?: IndexUsagePercent;
    public constructor() { 
        super();
    }
    public withTrendList(trendList: Array<IndexUsageTrendPoint>): ShowIndexUsageTrendResponse {
        this['trend_list'] = trendList;
        return this;
    }
    public set trendList(trendList: Array<IndexUsageTrendPoint>  | undefined) {
        this['trend_list'] = trendList;
    }
    public get trendList(): Array<IndexUsageTrendPoint> | undefined {
        return this['trend_list'];
    }
    public withFragmentationTrend(fragmentationTrend: IndexUsagePercent): ShowIndexUsageTrendResponse {
        this['fragmentation_trend'] = fragmentationTrend;
        return this;
    }
    public set fragmentationTrend(fragmentationTrend: IndexUsagePercent  | undefined) {
        this['fragmentation_trend'] = fragmentationTrend;
    }
    public get fragmentationTrend(): IndexUsagePercent | undefined {
        return this['fragmentation_trend'];
    }
    public withUsageTrend(usageTrend: IndexUsagePercent): ShowIndexUsageTrendResponse {
        this['usage_trend'] = usageTrend;
        return this;
    }
    public set usageTrend(usageTrend: IndexUsagePercent  | undefined) {
        this['usage_trend'] = usageTrend;
    }
    public get usageTrend(): IndexUsagePercent | undefined {
        return this['usage_trend'];
    }
}