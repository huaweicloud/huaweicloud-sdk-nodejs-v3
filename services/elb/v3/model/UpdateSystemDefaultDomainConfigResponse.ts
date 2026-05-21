import { DnsConfigResponseBody } from './DnsConfigResponseBody';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateSystemDefaultDomainConfigResponse extends SdkResponse {
    public loadbalancer?: DnsConfigResponseBody;
    private 'request_id'?: string;
    public constructor() { 
        super();
    }
    public withLoadbalancer(loadbalancer: DnsConfigResponseBody): UpdateSystemDefaultDomainConfigResponse {
        this['loadbalancer'] = loadbalancer;
        return this;
    }
    public withRequestId(requestId: string): UpdateSystemDefaultDomainConfigResponse {
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