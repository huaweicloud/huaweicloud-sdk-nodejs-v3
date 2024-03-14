
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateRefreshTasksResponse extends SdkResponse {
    private 'refresh_task'?: string;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withRefreshTask(refreshTask: string): CreateRefreshTasksResponse {
        this['refresh_task'] = refreshTask;
        return this;
    }
    public set refreshTask(refreshTask: string  | undefined) {
        this['refresh_task'] = refreshTask;
    }
    public get refreshTask(): string | undefined {
        return this['refresh_task'];
    }
    public withXRequestId(xRequestId: string): CreateRefreshTasksResponse {
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