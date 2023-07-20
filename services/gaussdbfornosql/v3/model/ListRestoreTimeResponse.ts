import { RestorableTime } from './RestorableTime';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListRestoreTimeResponse extends SdkResponse {
    private 'total_count'?: number;
    private 'restorable_time_periods'?: Array<RestorableTime>;
    public constructor() { 
        super();
    }
    public withTotalCount(totalCount: number): ListRestoreTimeResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
    public withRestorableTimePeriods(restorableTimePeriods: Array<RestorableTime>): ListRestoreTimeResponse {
        this['restorable_time_periods'] = restorableTimePeriods;
        return this;
    }
    public set restorableTimePeriods(restorableTimePeriods: Array<RestorableTime>  | undefined) {
        this['restorable_time_periods'] = restorableTimePeriods;
    }
    public get restorableTimePeriods(): Array<RestorableTime> | undefined {
        return this['restorable_time_periods'];
    }
}