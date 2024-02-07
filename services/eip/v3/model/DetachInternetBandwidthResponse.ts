import { DetachInternetBandwidthGlobalEips } from './DetachInternetBandwidthGlobalEips';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DetachInternetBandwidthResponse extends SdkResponse {
    private 'request_id'?: string;
    private 'global_eip'?: DetachInternetBandwidthGlobalEips;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withRequestId(requestId: string): DetachInternetBandwidthResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withGlobalEip(globalEip: DetachInternetBandwidthGlobalEips): DetachInternetBandwidthResponse {
        this['global_eip'] = globalEip;
        return this;
    }
    public set globalEip(globalEip: DetachInternetBandwidthGlobalEips  | undefined) {
        this['global_eip'] = globalEip;
    }
    public get globalEip(): DetachInternetBandwidthGlobalEips | undefined {
        return this['global_eip'];
    }
    public withXRequestId(xRequestId: string): DetachInternetBandwidthResponse {
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