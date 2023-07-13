import { SingleBackgroundTask } from './SingleBackgroundTask';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListBackgroundTaskResponse extends SdkResponse {
    private 'task_count'?: string | undefined;
    public tasks?: Array<SingleBackgroundTask>;
    public constructor() { 
        super();
    }
    public withTaskCount(taskCount: string): ListBackgroundTaskResponse {
        this['task_count'] = taskCount;
        return this;
    }
    public set taskCount(taskCount: string | undefined) {
        this['task_count'] = taskCount;
    }
    public get taskCount() {
        return this['task_count'];
    }
    public withTasks(tasks: Array<SingleBackgroundTask>): ListBackgroundTaskResponse {
        this['tasks'] = tasks;
        return this;
    }
}