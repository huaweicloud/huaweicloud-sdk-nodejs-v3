import { SignatureExecutionSubTask } from './SignatureExecutionSubTask';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListInstanceSignatureExecutionSubtasksResponse extends SdkResponse {
    private 'sub_tasks'?: Array<SignatureExecutionSubTask>;
    public total?: number;
    public constructor() { 
        super();
    }
    public withSubTasks(subTasks: Array<SignatureExecutionSubTask>): ListInstanceSignatureExecutionSubtasksResponse {
        this['sub_tasks'] = subTasks;
        return this;
    }
    public set subTasks(subTasks: Array<SignatureExecutionSubTask>  | undefined) {
        this['sub_tasks'] = subTasks;
    }
    public get subTasks(): Array<SignatureExecutionSubTask> | undefined {
        return this['sub_tasks'];
    }
    public withTotal(total: number): ListInstanceSignatureExecutionSubtasksResponse {
        this['total'] = total;
        return this;
    }
}