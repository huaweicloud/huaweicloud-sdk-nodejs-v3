import { DnsConfigResponseBody } from './DnsConfigResponseBody';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateSystemDefaultDomainConfigResponse extends SdkResponse {
    public loadbalancer?: DnsConfigResponseBody;
    public constructor() { 
        super();
    }
    public withLoadbalancer(loadbalancer: DnsConfigResponseBody): UpdateSystemDefaultDomainConfigResponse {
        this['loadbalancer'] = loadbalancer;
        return this;
    }
}