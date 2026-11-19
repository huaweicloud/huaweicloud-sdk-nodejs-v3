import { ColdTableWaitingTask } from './ColdTableWaitingTask';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListColdTableWaitingTasksResponse extends SdkResponse {
    private 'total_count'?: number;
    private 'waiting_tasks'?: Array<ColdTableWaitingTask>;
    public constructor() { 
        super();
    }
    public withTotalCount(totalCount: number): ListColdTableWaitingTasksResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
    public withWaitingTasks(waitingTasks: Array<ColdTableWaitingTask>): ListColdTableWaitingTasksResponse {
        this['waiting_tasks'] = waitingTasks;
        return this;
    }
    public set waitingTasks(waitingTasks: Array<ColdTableWaitingTask>  | undefined) {
        this['waiting_tasks'] = waitingTasks;
    }
    public get waitingTasks(): Array<ColdTableWaitingTask> | undefined {
        return this['waiting_tasks'];
    }
}