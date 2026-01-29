import { ComponentSoarRsp } from './ComponentSoarRsp';
import { TemplateInfo } from './TemplateInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListComponentTemplatesResponse extends SdkResponse {
    public code?: string;
    public total?: number;
    public size?: number;
    public page?: number;
    public message?: string;
    public success?: boolean;
    private 'request_id'?: string;
    public data?: Array<TemplateInfo>;
    public constructor() { 
        super();
    }
    public withCode(code: string): ListComponentTemplatesResponse {
        this['code'] = code;
        return this;
    }
    public withTotal(total: number): ListComponentTemplatesResponse {
        this['total'] = total;
        return this;
    }
    public withSize(size: number): ListComponentTemplatesResponse {
        this['size'] = size;
        return this;
    }
    public withPage(page: number): ListComponentTemplatesResponse {
        this['page'] = page;
        return this;
    }
    public withMessage(message: string): ListComponentTemplatesResponse {
        this['message'] = message;
        return this;
    }
    public withSuccess(success: boolean): ListComponentTemplatesResponse {
        this['success'] = success;
        return this;
    }
    public withRequestId(requestId: string): ListComponentTemplatesResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withData(data: Array<TemplateInfo>): ListComponentTemplatesResponse {
        this['data'] = data;
        return this;
    }
}