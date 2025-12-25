import { LayoutDetailInfo } from './LayoutDetailInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowLayoutResponse extends SdkResponse {
    public code?: string;
    public message?: string;
    public data?: LayoutDetailInfo;
    private 'X-request-id'?: string;
    public constructor() { 
        super();
    }
    public withCode(code: string): ShowLayoutResponse {
        this['code'] = code;
        return this;
    }
    public withMessage(message: string): ShowLayoutResponse {
        this['message'] = message;
        return this;
    }
    public withData(data: LayoutDetailInfo): ShowLayoutResponse {
        this['data'] = data;
        return this;
    }
    public withXRequestId(xRequestId: string): ShowLayoutResponse {
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