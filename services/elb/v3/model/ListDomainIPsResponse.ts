import { DnsIpResponse } from './DnsIpResponse';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListDomainIPsResponse extends SdkResponse {
    public ips?: Array<DnsIpResponse>;
    public constructor() { 
        super();
    }
    public withIps(ips: Array<DnsIpResponse>): ListDomainIPsResponse {
        this['ips'] = ips;
        return this;
    }
}