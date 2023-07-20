import { ScheduleTask } from './ScheduleTask';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListScheduleJobsResponse extends SdkResponse {
    public schedules?: Array<ScheduleTask>;
    private 'total_count'?: number;
    public constructor() { 
        super();
    }
    public withSchedules(schedules: Array<ScheduleTask>): ListScheduleJobsResponse {
        this['schedules'] = schedules;
        return this;
    }
    public withTotalCount(totalCount: number): ListScheduleJobsResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
}