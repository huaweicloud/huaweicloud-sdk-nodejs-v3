import { DeadLockTrendPoint } from './DeadLockTrendPoint';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowDeadLockTrendResponse extends SdkResponse {
    private 'interval_millis'?: number;
    private 'trend_list'?: Array<DeadLockTrendPoint>;
    public constructor() { 
        super();
    }
    public withIntervalMillis(intervalMillis: number): ShowDeadLockTrendResponse {
        this['interval_millis'] = intervalMillis;
        return this;
    }
    public set intervalMillis(intervalMillis: number  | undefined) {
        this['interval_millis'] = intervalMillis;
    }
    public get intervalMillis(): number | undefined {
        return this['interval_millis'];
    }
    public withTrendList(trendList: Array<DeadLockTrendPoint>): ShowDeadLockTrendResponse {
        this['trend_list'] = trendList;
        return this;
    }
    public set trendList(trendList: Array<DeadLockTrendPoint>  | undefined) {
        this['trend_list'] = trendList;
    }
    public get trendList(): Array<DeadLockTrendPoint> | undefined {
        return this['trend_list'];
    }
}