import { ListBackgroundTasksRespTasks } from './ListBackgroundTasksRespTasks';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListBackgroundTasksResponse extends SdkResponse {
    private 'task_count'?: string | undefined;
    public tasks?: Array<ListBackgroundTasksRespTasks>;
    public constructor() { 
        super();
    }
    public withTaskCount(taskCount: string): ListBackgroundTasksResponse {
        this['task_count'] = taskCount;
        return this;
    }
    public set taskCount(taskCount: string | undefined) {
        this['task_count'] = taskCount;
    }
    public get taskCount() {
        return this['task_count'];
    }
    public withTasks(tasks: Array<ListBackgroundTasksRespTasks>): ListBackgroundTasksResponse {
        this['tasks'] = tasks;
        return this;
    }
}