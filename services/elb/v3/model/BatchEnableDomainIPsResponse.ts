import { ListDnsIpResponseBody } from './ListDnsIpResponseBody';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchEnableDomainIPsResponse extends SdkResponse {
    public ips?: Array<ListDnsIpResponseBody>;
    public constructor() { 
        super();
    }
    public withIps(ips: Array<ListDnsIpResponseBody>): BatchEnableDomainIPsResponse {
        this['ips'] = ips;
        return this;
    }
}