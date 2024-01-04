
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class PublishHttpDetectResponse extends SdkResponse {
    private 'request_id'?: string;
    private 'task_id'?: string;
    public constructor() { 
        super();
    }
    public withRequestId(requestId: string): PublishHttpDetectResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withTaskId(taskId: string): PublishHttpDetectResponse {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): string | undefined {
        return this['task_id'];
    }
}