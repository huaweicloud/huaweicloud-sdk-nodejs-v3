import { BatchListResourceResponseData } from './BatchListResourceResponseData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListResourceResponse extends SdkResponse {
    public data?: Array<BatchListResourceResponseData>;
    private 'X-request-id'?: string;
    public constructor() { 
        super();
    }
    public withData(data: Array<BatchListResourceResponseData>): ListResourceResponse {
        this['data'] = data;
        return this;
    }
    public withXRequestId(xRequestId: string): ListResourceResponse {
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