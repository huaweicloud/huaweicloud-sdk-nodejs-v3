import { TaskDetailResult } from './TaskDetailResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListTasksResponse extends SdkResponse {
    public tasks?: Array<TaskDetailResult>;
    private 'total_count'?: number;
    public constructor() { 
        super();
    }
    public withTasks(tasks: Array<TaskDetailResult>): ListTasksResponse {
        this['tasks'] = tasks;
        return this;
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
}