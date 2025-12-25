import { ComponentSoarRsp } from './ComponentSoarRsp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListComponentsResponse extends SdkResponse {
    public code?: string;
    public total?: number;
    public size?: number;
    public page?: number;
    public message?: string;
    public success?: boolean;
    private 'request_id'?: string;
    public constructor() { 
        super();
    }
    public withCode(code: string): ListComponentsResponse {
        this['code'] = code;
        return this;
    }
    public withTotal(total: number): ListComponentsResponse {
        this['total'] = total;
        return this;
    }
    public withSize(size: number): ListComponentsResponse {
        this['size'] = size;
        return this;
    }
    public withPage(page: number): ListComponentsResponse {
        this['page'] = page;
        return this;
    }
    public withMessage(message: string): ListComponentsResponse {
        this['message'] = message;
        return this;
    }
    public withSuccess(success: boolean): ListComponentsResponse {
        this['success'] = success;
        return this;
    }
    public withRequestId(requestId: string): ListComponentsResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
}