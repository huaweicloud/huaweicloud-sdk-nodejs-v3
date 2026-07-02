import { ScheduledTaskV3 } from './ScheduledTaskV3';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CheckScheduleTaskExistResponse extends SdkResponse {
    public exist?: boolean;
    private 'scheduled_tasks'?: Array<ScheduledTaskV3>;
    public constructor() { 
        super();
    }
    public withExist(exist: boolean): CheckScheduleTaskExistResponse {
        this['exist'] = exist;
        return this;
    }
    public withScheduledTasks(scheduledTasks: Array<ScheduledTaskV3>): CheckScheduleTaskExistResponse {
        this['scheduled_tasks'] = scheduledTasks;
        return this;
    }
    public set scheduledTasks(scheduledTasks: Array<ScheduledTaskV3>  | undefined) {
        this['scheduled_tasks'] = scheduledTasks;
    }
    public get scheduledTasks(): Array<ScheduledTaskV3> | undefined {
        return this['scheduled_tasks'];
    }
}