import { DomainsWithPort } from './DomainsWithPort';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteDomainResponse extends SdkResponse {
    public domain?: DomainsWithPort;
    public constructor() { 
        super();
    }
    public withDomain(domain: DomainsWithPort): DeleteDomainResponse {
        this['domain'] = domain;
        return this;
    }
}