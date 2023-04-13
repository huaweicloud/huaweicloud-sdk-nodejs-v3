import { TaskResp } from './TaskResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListTasksResponse extends SdkResponse {
    public tasks?: Array<TaskResp>;
    public count?: number;
    public constructor() { 
        super();
    }
    public withTasks(tasks: Array<TaskResp>): ListTasksResponse {
        this['tasks'] = tasks;
        return this;
    }
    public withCount(count: number): ListTasksResponse {
        this['count'] = count;
        return this;
    }
}