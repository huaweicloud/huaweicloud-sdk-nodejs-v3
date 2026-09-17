import { MissingIndexTrendPoint } from './MissingIndexTrendPoint';
import { UserSeekTrend } from './UserSeekTrend';
import { UserTrendPercent } from './UserTrendPercent';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowMissingIndexTrendResponse extends SdkResponse {
    private 'trend_list'?: Array<MissingIndexTrendPoint>;
    private 'user_cost_trend'?: UserTrendPercent;
    private 'user_impact_trend'?: UserTrendPercent;
    private 'user_seek_trend'?: UserSeekTrend;
    public constructor() { 
        super();
    }
    public withTrendList(trendList: Array<MissingIndexTrendPoint>): ShowMissingIndexTrendResponse {
        this['trend_list'] = trendList;
        return this;
    }
    public set trendList(trendList: Array<MissingIndexTrendPoint>  | undefined) {
        this['trend_list'] = trendList;
    }
    public get trendList(): Array<MissingIndexTrendPoint> | undefined {
        return this['trend_list'];
    }
    public withUserCostTrend(userCostTrend: UserTrendPercent): ShowMissingIndexTrendResponse {
        this['user_cost_trend'] = userCostTrend;
        return this;
    }
    public set userCostTrend(userCostTrend: UserTrendPercent  | undefined) {
        this['user_cost_trend'] = userCostTrend;
    }
    public get userCostTrend(): UserTrendPercent | undefined {
        return this['user_cost_trend'];
    }
    public withUserImpactTrend(userImpactTrend: UserTrendPercent): ShowMissingIndexTrendResponse {
        this['user_impact_trend'] = userImpactTrend;
        return this;
    }
    public set userImpactTrend(userImpactTrend: UserTrendPercent  | undefined) {
        this['user_impact_trend'] = userImpactTrend;
    }
    public get userImpactTrend(): UserTrendPercent | undefined {
        return this['user_impact_trend'];
    }
    public withUserSeekTrend(userSeekTrend: UserSeekTrend): ShowMissingIndexTrendResponse {
        this['user_seek_trend'] = userSeekTrend;
        return this;
    }
    public set userSeekTrend(userSeekTrend: UserSeekTrend  | undefined) {
        this['user_seek_trend'] = userSeekTrend;
    }
    public get userSeekTrend(): UserSeekTrend | undefined {
        return this['user_seek_trend'];
    }
}