import { BatchCreateGlobalEip } from './BatchCreateGlobalEip';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchCreateGlobalEipResponse extends SdkResponse {
    private 'request_id'?: string;
    private 'global_eip'?: BatchCreateGlobalEip;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withRequestId(requestId: string): BatchCreateGlobalEipResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withGlobalEip(globalEip: BatchCreateGlobalEip): BatchCreateGlobalEipResponse {
        this['global_eip'] = globalEip;
        return this;
    }
    public set globalEip(globalEip: BatchCreateGlobalEip  | undefined) {
        this['global_eip'] = globalEip;
    }
    public get globalEip(): BatchCreateGlobalEip | undefined {
        return this['global_eip'];
    }
    public withXRequestId(xRequestId: string): BatchCreateGlobalEipResponse {
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