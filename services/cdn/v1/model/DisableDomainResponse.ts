import { DomainsWithPort } from './DomainsWithPort';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DisableDomainResponse extends SdkResponse {
    public domain?: DomainsWithPort;
    public constructor() { 
        super();
    }
    public withDomain(domain: DomainsWithPort): DisableDomainResponse {
        this['domain'] = domain;
        return this;
    }
}