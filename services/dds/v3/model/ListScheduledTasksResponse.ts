import { ScheduledTasksRspSchedules } from './ScheduledTasksRspSchedules';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListScheduledTasksResponse extends SdkResponse {
    private 'total_count'?: number;
    public schedules?: Array<ScheduledTasksRspSchedules>;
    public constructor() { 
        super();
    }
    public withTotalCount(totalCount: number): ListScheduledTasksResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
    public withSchedules(schedules: Array<ScheduledTasksRspSchedules>): ListScheduledTasksResponse {
        this['schedules'] = schedules;
        return this;
    }
}