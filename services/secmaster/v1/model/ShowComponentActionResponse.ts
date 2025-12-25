import { ComponentSoarBaseRsp } from './ComponentSoarBaseRsp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowComponentActionResponse extends SdkResponse {
    public code?: string;
    public message?: string;
    public success?: boolean;
    private 'request_id'?: string;
    public constructor(code?: string) { 
        super();
        this['code'] = code;
    }
    public withCode(code: string): ShowComponentActionResponse {
        this['code'] = code;
        return this;
    }
    public withMessage(message: string): ShowComponentActionResponse {
        this['message'] = message;
        return this;
    }
    public withSuccess(success: boolean): ShowComponentActionResponse {
        this['success'] = success;
        return this;
    }
    public withRequestId(requestId: string): ShowComponentActionResponse {
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