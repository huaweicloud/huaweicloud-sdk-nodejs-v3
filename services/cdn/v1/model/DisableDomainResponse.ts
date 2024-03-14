import { DomainsWithPort } from './DomainsWithPort';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DisableDomainResponse extends SdkResponse {
    public domain?: DomainsWithPort;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withDomain(domain: DomainsWithPort): DisableDomainResponse {
        this['domain'] = domain;
        return this;
    }
    public withXRequestId(xRequestId: string): DisableDomainResponse {
        this['X-Request-Id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string  | undefined) {
        this['X-Request-Id'] = xRequestId;
    }
    public get xRequestId(): string | undefined {
        return this['X-Request-Id'];
    }
}