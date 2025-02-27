
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateScheduleRecordTasksResponse extends SdkResponse {
    private 'task_id'?: string;
    private 'X-request-id'?: string;
    public constructor() { 
        super();
    }
    public withTaskId(taskId: string): CreateScheduleRecordTasksResponse {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): string | undefined {
        return this['task_id'];
    }
    public withXRequestId(xRequestId: string): CreateScheduleRecordTasksResponse {
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