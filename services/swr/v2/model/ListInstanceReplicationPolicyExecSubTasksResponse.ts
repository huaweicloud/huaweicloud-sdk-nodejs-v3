import { SubtaskDetail } from './SubtaskDetail';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListInstanceReplicationPolicyExecSubTasksResponse extends SdkResponse {
    private 'sub_tasks'?: Array<SubtaskDetail>;
    public total?: number;
    public constructor() { 
        super();
    }
    public withSubTasks(subTasks: Array<SubtaskDetail>): ListInstanceReplicationPolicyExecSubTasksResponse {
        this['sub_tasks'] = subTasks;
        return this;
    }
    public set subTasks(subTasks: Array<SubtaskDetail>  | undefined) {
        this['sub_tasks'] = subTasks;
    }
    public get subTasks(): Array<SubtaskDetail> | undefined {
        return this['sub_tasks'];
    }
    public withTotal(total: number): ListInstanceReplicationPolicyExecSubTasksResponse {
        this['total'] = total;
        return this;
    }
}