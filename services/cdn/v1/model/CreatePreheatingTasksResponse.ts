
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreatePreheatingTasksResponse extends SdkResponse {
    private 'preheating_task'?: string;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withPreheatingTask(preheatingTask: string): CreatePreheatingTasksResponse {
        this['preheating_task'] = preheatingTask;
        return this;
    }
    public set preheatingTask(preheatingTask: string  | undefined) {
        this['preheating_task'] = preheatingTask;
    }
    public get preheatingTask(): string | undefined {
        return this['preheating_task'];
    }
    public withXRequestId(xRequestId: string): CreatePreheatingTasksResponse {
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