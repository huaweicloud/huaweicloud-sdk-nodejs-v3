import { SubtaskDetail } from './SubtaskDetail';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListInstanceReplicationPolicyExecSubTasksResponse extends SdkResponse {
    public subtasks?: Array<SubtaskDetail>;
    public total?: number;
    public constructor() { 
        super();
    }
    public withSubtasks(subtasks: Array<SubtaskDetail>): ListInstanceReplicationPolicyExecSubTasksResponse {
        this['subtasks'] = subtasks;
        return this;
    }
    public withTotal(total: number): ListInstanceReplicationPolicyExecSubTasksResponse {
        this['total'] = total;
        return this;
    }
}