import { Statistic } from './Statistic';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSqlStatisticsResponse extends SdkResponse {
    private 'reset_view_last_time'?: number;
    private 'total_count'?: number;
    public list?: Array<Statistic>;
    public constructor() { 
        super();
    }
    public withResetViewLastTime(resetViewLastTime: number): ListSqlStatisticsResponse {
        this['reset_view_last_time'] = resetViewLastTime;
        return this;
    }
    public set resetViewLastTime(resetViewLastTime: number  | undefined) {
        this['reset_view_last_time'] = resetViewLastTime;
    }
    public get resetViewLastTime(): number | undefined {
        return this['reset_view_last_time'];
    }
    public withTotalCount(totalCount: number): ListSqlStatisticsResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
    public withList(list: Array<Statistic>): ListSqlStatisticsResponse {
        this['list'] = list;
        return this;
    }
}