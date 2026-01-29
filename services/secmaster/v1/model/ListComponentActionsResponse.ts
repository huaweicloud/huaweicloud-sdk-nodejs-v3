import { ComponentActionInfo } from './ComponentActionInfo';
import { ComponentSoarRsp } from './ComponentSoarRsp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListComponentActionsResponse extends SdkResponse {
    public code?: string;
    public total?: number;
    public size?: number;
    public page?: number;
    public message?: string;
    public success?: boolean;
    private 'request_id'?: string;
    public data?: Array<ComponentActionInfo>;
    public constructor() { 
        super();
    }
    public withCode(code: string): ListComponentActionsResponse {
        this['code'] = code;
        return this;
    }
    public withTotal(total: number): ListComponentActionsResponse {
        this['total'] = total;
        return this;
    }
    public withSize(size: number): ListComponentActionsResponse {
        this['size'] = size;
        return this;
    }
    public withPage(page: number): ListComponentActionsResponse {
        this['page'] = page;
        return this;
    }
    public withMessage(message: string): ListComponentActionsResponse {
        this['message'] = message;
        return this;
    }
    public withSuccess(success: boolean): ListComponentActionsResponse {
        this['success'] = success;
        return this;
    }
    public withRequestId(requestId: string): ListComponentActionsResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withData(data: Array<ComponentActionInfo>): ListComponentActionsResponse {
        this['data'] = data;
        return this;
    }
}