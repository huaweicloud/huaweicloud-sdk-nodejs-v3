import { ModuleDetailInfo } from './ModuleDetailInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowModuleResponse extends SdkResponse {
    public code?: string;
    public message?: string;
    public data?: ModuleDetailInfo;
    private 'X-request-id'?: string;
    public constructor() { 
        super();
    }
    public withCode(code: string): ShowModuleResponse {
        this['code'] = code;
        return this;
    }
    public withMessage(message: string): ShowModuleResponse {
        this['message'] = message;
        return this;
    }
    public withData(data: ModuleDetailInfo): ShowModuleResponse {
        this['data'] = data;
        return this;
    }
    public withXRequestId(xRequestId: string): ShowModuleResponse {
        this['X-request-id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string  | undefined) {
        this['X-request-id'] = xRequestId;
    }
    public get xRequestId(): string | undefined {
        return this['X-request-id'];
    }
}