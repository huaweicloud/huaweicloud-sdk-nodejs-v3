import { TasksObject } from './TasksObject';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowHistoryTasksResponse extends SdkResponse {
    public total?: number;
    public tasks?: Array<TasksObject>;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ShowHistoryTasksResponse {
        this['total'] = total;
        return this;
    }
    public withTasks(tasks: Array<TasksObject>): ShowHistoryTasksResponse {
        this['tasks'] = tasks;
        return this;
    }
    public withXRequestId(xRequestId: string): ShowHistoryTasksResponse {
        this['X-Request-Id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string  | undefined) {
        this['X-Request-Id'] = xRequestId;
    }
    public get xRequestId(): string | undefined {
        return this['X-Request-Id'];
    }
}