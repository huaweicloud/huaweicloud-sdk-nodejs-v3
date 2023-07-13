import { DomainsWithPort } from './DomainsWithPort';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowDomainDetailResponse extends SdkResponse {
    public domain?: DomainsWithPort;
    public constructor() { 
        super();
    }
    public withDomain(domain: DomainsWithPort): ShowDomainDetailResponse {
        this['domain'] = domain;
        return this;
    }
}