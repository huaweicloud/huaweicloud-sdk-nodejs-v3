import { DnsConfigResponseBody } from './DnsConfigResponseBody';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateUserDefinedDomainConfigResponse extends SdkResponse {
    public loadbalancer?: DnsConfigResponseBody;
    public constructor() { 
        super();
    }
    public withLoadbalancer(loadbalancer: DnsConfigResponseBody): UpdateUserDefinedDomainConfigResponse {
        this['loadbalancer'] = loadbalancer;
        return this;
    }
}