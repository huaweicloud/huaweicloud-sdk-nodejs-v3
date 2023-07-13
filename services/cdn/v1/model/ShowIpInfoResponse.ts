import { CdnIps } from './CdnIps';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowIpInfoResponse extends SdkResponse {
    private 'cdn_ips'?: Array<CdnIps> | undefined;
    public constructor() { 
        super();
    }
    public withCdnIps(cdnIps: Array<CdnIps>): ShowIpInfoResponse {
        this['cdn_ips'] = cdnIps;
        return this;
    }
    public set cdnIps(cdnIps: Array<CdnIps> | undefined) {
        this['cdn_ips'] = cdnIps;
    }
    public get cdnIps() {
        return this['cdn_ips'];
    }
}