import { ListDnsIpResponseBody } from './ListDnsIpResponseBody';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchDisableDomainIPsResponse extends SdkResponse {
    public ips?: Array<ListDnsIpResponseBody>;
    public constructor() { 
        super();
    }
    public withIps(ips: Array<ListDnsIpResponseBody>): BatchDisableDomainIPsResponse {
        this['ips'] = ips;
        return this;
    }
}