import { SignatureExecutionTask } from './SignatureExecutionTask';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListInstanceSignPolicyExecTasksResponse extends SdkResponse {
    public tasks?: Array<SignatureExecutionTask>;
    public total?: number;
    public constructor() { 
        super();
    }
    public withTasks(tasks: Array<SignatureExecutionTask>): ListInstanceSignPolicyExecTasksResponse {
        this['tasks'] = tasks;
        return this;
    }
    public withTotal(total: number): ListInstanceSignPolicyExecTasksResponse {
        this['total'] = total;
        return this;
    }
}