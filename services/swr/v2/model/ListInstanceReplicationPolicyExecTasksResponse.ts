import { TaskDetail } from './TaskDetail';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListInstanceReplicationPolicyExecTasksResponse extends SdkResponse {
    public tasks?: Array<TaskDetail>;
    public total?: number;
    public constructor() { 
        super();
    }
    public withTasks(tasks: Array<TaskDetail>): ListInstanceReplicationPolicyExecTasksResponse {
        this['tasks'] = tasks;
        return this;
    }
    public withTotal(total: number): ListInstanceReplicationPolicyExecTasksResponse {
        this['total'] = total;
        return this;
    }
}