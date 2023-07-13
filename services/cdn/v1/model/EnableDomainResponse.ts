import { DomainsWithPort } from './DomainsWithPort';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class EnableDomainResponse extends SdkResponse {
    public domain?: DomainsWithPort;
    public constructor() { 
        super();
    }
    public withDomain(domain: DomainsWithPort): EnableDomainResponse {
        this['domain'] = domain;
        return this;
    }
}