import { ScheduleDetailInfo } from './ScheduleDetailInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListNosqlTaskListResponse extends SdkResponse {
    private 'total_count'?: string;
    public schedules?: Array<ScheduleDetailInfo>;
    public constructor() { 
        super();
    }
    public withTotalCount(totalCount: string): ListNosqlTaskListResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: string  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): string | undefined {
        return this['total_count'];
    }
    public withSchedules(schedules: Array<ScheduleDetailInfo>): ListNosqlTaskListResponse {
        this['schedules'] = schedules;
        return this;
    }
}