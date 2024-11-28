import { CountGlobalEips } from './CountGlobalEips';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CountGlobalEipsResponse extends SdkResponse {
    private 'request_id'?: string;
    private 'global_eip'?: CountGlobalEips;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withRequestId(requestId: string): CountGlobalEipsResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withGlobalEip(globalEip: CountGlobalEips): CountGlobalEipsResponse {
        this['global_eip'] = globalEip;
        return this;
    }
    public set globalEip(globalEip: CountGlobalEips  | undefined) {
        this['global_eip'] = globalEip;
    }
    public get globalEip(): CountGlobalEips | undefined {
        return this['global_eip'];
    }
    public withXRequestId(xRequestId: string): CountGlobalEipsResponse {
        this['X-Request-Id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string  | undefined) {
        this['X-Request-Id'] = xRequestId;
    }
    public get xRequestId(): string | undefined {
        return this['X-Request-Id'];
    }
}