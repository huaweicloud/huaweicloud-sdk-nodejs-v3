import { DnsIpResponse } from './DnsIpResponse';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchEnableDomainIPsResponse extends SdkResponse {
    public ips?: Array<DnsIpResponse>;
    private 'request_id'?: string;
    public constructor() { 
        super();
    }
    public withIps(ips: Array<DnsIpResponse>): BatchEnableDomainIPsResponse {
        this['ips'] = ips;
        return this;
    }
    public withRequestId(requestId: string): BatchEnableDomainIPsResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
}