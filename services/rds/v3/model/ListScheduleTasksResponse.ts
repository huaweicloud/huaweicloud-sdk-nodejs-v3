import { ScheduleTaskInfo } from './ScheduleTaskInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListScheduleTasksResponse extends SdkResponse {
    private 'schedule_tasks'?: Array<ScheduleTaskInfo>;
    private 'total_count'?: number;
    public constructor() { 
        super();
    }
    public withScheduleTasks(scheduleTasks: Array<ScheduleTaskInfo>): ListScheduleTasksResponse {
        this['schedule_tasks'] = scheduleTasks;
        return this;
    }
    public set scheduleTasks(scheduleTasks: Array<ScheduleTaskInfo>  | undefined) {
        this['schedule_tasks'] = scheduleTasks;
    }
    public get scheduleTasks(): Array<ScheduleTaskInfo> | undefined {
        return this['schedule_tasks'];
    }
    public withTotalCount(totalCount: number): ListScheduleTasksResponse {
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