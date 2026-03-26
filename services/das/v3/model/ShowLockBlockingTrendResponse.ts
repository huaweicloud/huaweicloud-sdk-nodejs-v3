import { ShowLockBlockingTrendRespTrendList } from './ShowLockBlockingTrendRespTrendList';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowLockBlockingTrendResponse extends SdkResponse {
    private 'interval_millis'?: number;
    private 'trend_list'?: Array<ShowLockBlockingTrendRespTrendList>;
    public constructor() { 
        super();
    }
    public withIntervalMillis(intervalMillis: number): ShowLockBlockingTrendResponse {
        this['interval_millis'] = intervalMillis;
        return this;
    }
    public set intervalMillis(intervalMillis: number  | undefined) {
        this['interval_millis'] = intervalMillis;
    }
    public get intervalMillis(): number | undefined {
        return this['interval_millis'];
    }
    public withTrendList(trendList: Array<ShowLockBlockingTrendRespTrendList>): ShowLockBlockingTrendResponse {
        this['trend_list'] = trendList;
        return this;
    }
    public set trendList(trendList: Array<ShowLockBlockingTrendRespTrendList>  | undefined) {
        this['trend_list'] = trendList;
    }
    public get trendList(): Array<ShowLockBlockingTrendRespTrendList> | undefined {
        return this['trend_list'];
    }
}