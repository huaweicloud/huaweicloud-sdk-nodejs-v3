import { DnsIpResponse } from './DnsIpResponse';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchDisableDomainIPsResponse extends SdkResponse {
    public ips?: Array<DnsIpResponse>;
    private 'request_id'?: string;
    public constructor() { 
        super();
    }
    public withIps(ips: Array<DnsIpResponse>): BatchDisableDomainIPsResponse {
        this['ips'] = ips;
        return this;
    }
    public withRequestId(requestId: string): BatchDisableDomainIPsResponse {
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