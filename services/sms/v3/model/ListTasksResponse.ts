import { TasksResponseBody } from './TasksResponseBody';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListTasksResponse extends SdkResponse {
    public count?: number;
    public tasks?: Array<TasksResponseBody>;
    public constructor() { 
        super();
    }
    public withCount(count: number): ListTasksResponse {
        this['count'] = count;
        return this;
    }
    public withTasks(tasks: Array<TasksResponseBody>): ListTasksResponse {
        this['tasks'] = tasks;
        return this;
    }
}