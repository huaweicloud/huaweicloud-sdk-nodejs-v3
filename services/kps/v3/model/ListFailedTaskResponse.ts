import { FailedTasks } from './FailedTasks';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListFailedTaskResponse extends SdkResponse {
    public total?: number;
    public tasks?: Array<FailedTasks>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListFailedTaskResponse {
        this['total'] = total;
        return this;
    }
    public withTasks(tasks: Array<FailedTasks>): ListFailedTaskResponse {
        this['tasks'] = tasks;
        return this;
    }
}