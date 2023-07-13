import { ListSinkTasksRespTasks } from './ListSinkTasksRespTasks';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSinkTasksResponse extends SdkResponse {
    public tasks?: Array<ListSinkTasksRespTasks>;
    private 'total_number'?: number | undefined;
    private 'max_tasks'?: number | undefined;
    private 'quota_tasks'?: number | undefined;
    public constructor() { 
        super();
    }
    public withTasks(tasks: Array<ListSinkTasksRespTasks>): ListSinkTasksResponse {
        this['tasks'] = tasks;
        return this;
    }
    public withTotalNumber(totalNumber: number): ListSinkTasksResponse {
        this['total_number'] = totalNumber;
        return this;
    }
    public set totalNumber(totalNumber: number | undefined) {
        this['total_number'] = totalNumber;
    }
    public get totalNumber() {
        return this['total_number'];
    }
    public withMaxTasks(maxTasks: number): ListSinkTasksResponse {
        this['max_tasks'] = maxTasks;
        return this;
    }
    public set maxTasks(maxTasks: number | undefined) {
        this['max_tasks'] = maxTasks;
    }
    public get maxTasks() {
        return this['max_tasks'];
    }
    public withQuotaTasks(quotaTasks: number): ListSinkTasksResponse {
        this['quota_tasks'] = quotaTasks;
        return this;
    }
    public set quotaTasks(quotaTasks: number | undefined) {
        this['quota_tasks'] = quotaTasks;
    }
    public get quotaTasks() {
        return this['quota_tasks'];
    }
}