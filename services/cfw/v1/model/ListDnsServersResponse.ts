import { DnsServersResponseDTO } from './DnsServersResponseDTO';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListDnsServersResponse extends SdkResponse {
    public data?: Array<DnsServersResponseDTO>;
    public total?: number;
    public constructor() { 
        super();
    }
    public withData(data: Array<DnsServersResponseDTO>): ListDnsServersResponse {
        this['data'] = data;
        return this;
    }
    public withTotal(total: number): ListDnsServersResponse {
        this['total'] = total;
        return this;
    }
}