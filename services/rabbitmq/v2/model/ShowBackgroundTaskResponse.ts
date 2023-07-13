import { ListBackgroundTasksRespTasks } from './ListBackgroundTasksRespTasks';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowBackgroundTaskResponse extends SdkResponse {
    private 'task_count'?: string | undefined;
    public tasks?: Array<ListBackgroundTasksRespTasks>;
    public constructor() { 
        super();
    }
    public withTaskCount(taskCount: string): ShowBackgroundTaskResponse {
        this['task_count'] = taskCount;
        return this;
    }
    public set taskCount(taskCount: string | undefined) {
        this['task_count'] = taskCount;
    }
    public get taskCount() {
        return this['task_count'];
    }
    public withTasks(tasks: Array<ListBackgroundTasksRespTasks>): ShowBackgroundTaskResponse {
        this['tasks'] = tasks;
        return this;
    }
}