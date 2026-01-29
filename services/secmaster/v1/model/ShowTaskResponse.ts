import { TaskInfo } from './TaskInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowTaskResponse extends SdkResponse {
    public code?: string;
    public message?: string;
    private 'request_id'?: string;
    public success?: boolean;
    public data?: TaskInfo;
    public constructor() { 
        super();
    }
    public withCode(code: string): ShowTaskResponse {
        this['code'] = code;
        return this;
    }
    public withMessage(message: string): ShowTaskResponse {
        this['message'] = message;
        return this;
    }
    public withRequestId(requestId: string): ShowTaskResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withSuccess(success: boolean): ShowTaskResponse {
        this['success'] = success;
        return this;
    }
    public withData(data: TaskInfo): ShowTaskResponse {
        this['data'] = data;
        return this;
    }
}