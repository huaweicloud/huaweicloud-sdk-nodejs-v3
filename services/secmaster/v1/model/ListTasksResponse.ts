import { TaskInfo } from './TaskInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListTasksResponse extends SdkResponse {
    public code?: string;
    public message?: string;
    public total?: number;
    public page?: number;
    public size?: number;
    private 'request_id'?: string;
    public success?: boolean;
    public data?: Array<TaskInfo>;
    public constructor() { 
        super();
    }
    public withCode(code: string): ListTasksResponse {
        this['code'] = code;
        return this;
    }
    public withMessage(message: string): ListTasksResponse {
        this['message'] = message;
        return this;
    }
    public withTotal(total: number): ListTasksResponse {
        this['total'] = total;
        return this;
    }
    public withPage(page: number): ListTasksResponse {
        this['page'] = page;
        return this;
    }
    public withSize(size: number): ListTasksResponse {
        this['size'] = size;
        return this;
    }
    public withRequestId(requestId: string): ListTasksResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withSuccess(success: boolean): ListTasksResponse {
        this['success'] = success;
        return this;
    }
    public withData(data: Array<TaskInfo>): ListTasksResponse {
        this['data'] = data;
        return this;
    }
}