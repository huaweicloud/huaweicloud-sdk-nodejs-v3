import { CdnIps } from './CdnIps';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowIpInfoResponse extends SdkResponse {
    private 'cdn_ips'?: Array<CdnIps>;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withCdnIps(cdnIps: Array<CdnIps>): ShowIpInfoResponse {
        this['cdn_ips'] = cdnIps;
        return this;
    }
    public set cdnIps(cdnIps: Array<CdnIps>  | undefined) {
        this['cdn_ips'] = cdnIps;
    }
    public get cdnIps(): Array<CdnIps> | undefined {
        return this['cdn_ips'];
    }
    public withXRequestId(xRequestId: string): ShowIpInfoResponse {
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