import { ListCenterTasksResp } from './ListCenterTasksResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListCenterTaskResponse extends SdkResponse {
    private 'task_count'?: string;
    public tasks?: Array<ListCenterTasksResp>;
    public constructor() { 
        super();
    }
    public withTaskCount(taskCount: string): ListCenterTaskResponse {
        this['task_count'] = taskCount;
        return this;
    }
    public set taskCount(taskCount: string  | undefined) {
        this['task_count'] = taskCount;
    }
    public get taskCount(): string | undefined {
        return this['task_count'];
    }
    public withTasks(tasks: Array<ListCenterTasksResp>): ListCenterTaskResponse {
        this['tasks'] = tasks;
        return this;
    }
}