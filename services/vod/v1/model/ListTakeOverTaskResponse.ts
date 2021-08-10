import { TakeOverTask } from './TakeOverTask';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListTakeOverTaskResponse extends SdkResponse {
    public tasks?: Array<TakeOverTask>;
    public total?: number;
    public constructor() { 
        super();
    }
    public withTasks(tasks: Array<TakeOverTask>): ListTakeOverTaskResponse {
        this['tasks'] = tasks;
        return this;
    }
    public withTotal(total: number): ListTakeOverTaskResponse {
        this['total'] = total;
        return this;
    }
}