import { Task } from './Task';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListTasksResponse extends SdkResponse {
    private 'total_count'?: number;
    public actions?: Array<string>;
    public tasks?: Array<Task>;
    public constructor() { 
        super();
    }
    public withTotalCount(totalCount: number): ListTasksResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
    public withActions(actions: Array<string>): ListTasksResponse {
        this['actions'] = actions;
        return this;
    }
    public withTasks(tasks: Array<Task>): ListTasksResponse {
        this['tasks'] = tasks;
        return this;
    }
}