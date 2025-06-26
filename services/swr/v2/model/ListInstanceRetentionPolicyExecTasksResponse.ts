import { Task } from './Task';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListInstanceRetentionPolicyExecTasksResponse extends SdkResponse {
    public tasks?: Array<Task>;
    public total?: number;
    public constructor() { 
        super();
    }
    public withTasks(tasks: Array<Task>): ListInstanceRetentionPolicyExecTasksResponse {
        this['tasks'] = tasks;
        return this;
    }
    public withTotal(total: number): ListInstanceRetentionPolicyExecTasksResponse {
        this['total'] = total;
        return this;
    }
}