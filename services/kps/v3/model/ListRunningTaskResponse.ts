import { RunningTasks } from './RunningTasks';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListRunningTaskResponse extends SdkResponse {
    public total?: number;
    public tasks?: Array<RunningTasks>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListRunningTaskResponse {
        this['total'] = total;
        return this;
    }
    public withTasks(tasks: Array<RunningTasks>): ListRunningTaskResponse {
        this['tasks'] = tasks;
        return this;
    }
}