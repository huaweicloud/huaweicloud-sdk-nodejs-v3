import { ComponentSoarBaseRsp } from './ComponentSoarBaseRsp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowComponentResponse extends SdkResponse {
    public code?: string;
    public message?: string;
    public success?: boolean;
    private 'request_id'?: string;
    public constructor(code?: string) { 
        super();
        this['code'] = code;
    }
    public withCode(code: string): ShowComponentResponse {
        this['code'] = code;
        return this;
    }
    public withMessage(message: string): ShowComponentResponse {
        this['message'] = message;
        return this;
    }
    public withSuccess(success: boolean): ShowComponentResponse {
        this['success'] = success;
        return this;
    }
    public withRequestId(requestId: string): ShowComponentResponse {
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