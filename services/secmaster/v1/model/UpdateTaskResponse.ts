import { TaskInfo } from './TaskInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateTaskResponse extends SdkResponse {
    public code?: string;
    public message?: string;
    private 'request_id'?: string;
    public success?: boolean;
    public data?: TaskInfo;
    public constructor() { 
        super();
    }
    public withCode(code: string): UpdateTaskResponse {
        this['code'] = code;
        return this;
    }
    public withMessage(message: string): UpdateTaskResponse {
        this['message'] = message;
        return this;
    }
    public withRequestId(requestId: string): UpdateTaskResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withSuccess(success: boolean): UpdateTaskResponse {
        this['success'] = success;
        return this;
    }
    public withData(data: TaskInfo): UpdateTaskResponse {
        this['data'] = data;
        return this;
    }
}