import { TemplateInfo } from './TemplateInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowComponentTemplateResponse extends SdkResponse {
    public code?: string;
    public message?: string;
    public success?: boolean;
    private 'request_id'?: string;
    public data?: TemplateInfo;
    public constructor() { 
        super();
    }
    public withCode(code: string): ShowComponentTemplateResponse {
        this['code'] = code;
        return this;
    }
    public withMessage(message: string): ShowComponentTemplateResponse {
        this['message'] = message;
        return this;
    }
    public withSuccess(success: boolean): ShowComponentTemplateResponse {
        this['success'] = success;
        return this;
    }
    public withRequestId(requestId: string): ShowComponentTemplateResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withData(data: TemplateInfo): ShowComponentTemplateResponse {
        this['data'] = data;
        return this;
    }
}