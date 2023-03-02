
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateVideoTranslateTaskResponse extends SdkResponse {
    private 'task_id'?: string | undefined;
    private 'X-request-id'?: string | undefined;
    public constructor() { 
        super();
    }
    public withTaskId(taskId: string): CreateVideoTranslateTaskResponse {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId() {
        return this['task_id'];
    }
    public withXRequestId(xRequestId: string): CreateVideoTranslateTaskResponse {
        this['X-request-id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string | undefined) {
        this['X-request-id'] = xRequestId;
    }
    public get xRequestId() {
        return this['X-request-id'];
    }
}