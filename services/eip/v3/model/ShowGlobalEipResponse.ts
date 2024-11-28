import { ShowGlobalEip } from './ShowGlobalEip';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowGlobalEipResponse extends SdkResponse {
    private 'request_id'?: string;
    private 'global_eip'?: ShowGlobalEip;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withRequestId(requestId: string): ShowGlobalEipResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withGlobalEip(globalEip: ShowGlobalEip): ShowGlobalEipResponse {
        this['global_eip'] = globalEip;
        return this;
    }
    public set globalEip(globalEip: ShowGlobalEip  | undefined) {
        this['global_eip'] = globalEip;
    }
    public get globalEip(): ShowGlobalEip | undefined {
        return this['global_eip'];
    }
    public withXRequestId(xRequestId: string): ShowGlobalEipResponse {
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