import { ScheduleTaskDetail } from './ScheduleTaskDetail';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListScheduleTaskResponse extends SdkResponse {
    public tasks?: Array<ScheduleTaskDetail>;
    private 'total_count'?: number;
    public constructor() { 
        super();
    }
    public withTasks(tasks: Array<ScheduleTaskDetail>): ListScheduleTaskResponse {
        this['tasks'] = tasks;
        return this;
    }
    public withTotalCount(totalCount: number): ListScheduleTaskResponse {
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