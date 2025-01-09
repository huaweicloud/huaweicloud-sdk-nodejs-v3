import { ScheduledTask } from './ScheduledTask';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListScheduledTasksResponse extends SdkResponse {
    private 'scheduled_tasks'?: Array<ScheduledTask>;
    private 'total_count'?: number;
    public constructor() { 
        super();
    }
    public withScheduledTasks(scheduledTasks: Array<ScheduledTask>): ListScheduledTasksResponse {
        this['scheduled_tasks'] = scheduledTasks;
        return this;
    }
    public set scheduledTasks(scheduledTasks: Array<ScheduledTask>  | undefined) {
        this['scheduled_tasks'] = scheduledTasks;
    }
    public get scheduledTasks(): Array<ScheduledTask> | undefined {
        return this['scheduled_tasks'];
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
}