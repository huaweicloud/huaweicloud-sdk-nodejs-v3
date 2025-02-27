import { ScheduleRecordTasks } from './ScheduleRecordTasks';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListScheduleRecordTasksResponse extends SdkResponse {
    public total?: number;
    public offset?: number;
    public limit?: number;
    public tasks?: Array<ScheduleRecordTasks>;
    private 'X-request-id'?: string;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListScheduleRecordTasksResponse {
        this['total'] = total;
        return this;
    }
    public withOffset(offset: number): ListScheduleRecordTasksResponse {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListScheduleRecordTasksResponse {
        this['limit'] = limit;
        return this;
    }
    public withTasks(tasks: Array<ScheduleRecordTasks>): ListScheduleRecordTasksResponse {
        this['tasks'] = tasks;
        return this;
    }
    public withXRequestId(xRequestId: string): ListScheduleRecordTasksResponse {
        this['X-request-id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string  | undefined) {
        this['X-request-id'] = xRequestId;
    }
    public get xRequestId(): string | undefined {
        return this['X-request-id'];
    }
}