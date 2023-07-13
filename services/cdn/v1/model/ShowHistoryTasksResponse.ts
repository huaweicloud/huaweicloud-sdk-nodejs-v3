import { TasksObject } from './TasksObject';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowHistoryTasksResponse extends SdkResponse {
    public total?: number;
    public tasks?: Array<TasksObject>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ShowHistoryTasksResponse {
        this['total'] = total;
        return this;
    }
    public withTasks(tasks: Array<TasksObject>): ShowHistoryTasksResponse {
        this['tasks'] = tasks;
        return this;
    }
}