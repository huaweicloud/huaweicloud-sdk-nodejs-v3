import { Subtask } from './Subtask';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListInstanceRetentionPolicyExecSubTasksResponse extends SdkResponse {
    private 'sub_tasks'?: Array<Subtask>;
    public total?: number;
    public constructor() { 
        super();
    }
    public withSubTasks(subTasks: Array<Subtask>): ListInstanceRetentionPolicyExecSubTasksResponse {
        this['sub_tasks'] = subTasks;
        return this;
    }
    public set subTasks(subTasks: Array<Subtask>  | undefined) {
        this['sub_tasks'] = subTasks;
    }
    public get subTasks(): Array<Subtask> | undefined {
        return this['sub_tasks'];
    }
    public withTotal(total: number): ListInstanceRetentionPolicyExecSubTasksResponse {
        this['total'] = total;
        return this;
    }
}