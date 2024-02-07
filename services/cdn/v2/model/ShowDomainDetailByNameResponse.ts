import { DomainsDetail } from './DomainsDetail';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowDomainDetailByNameResponse extends SdkResponse {
    public domain?: DomainsDetail;
    public constructor() { 
        super();
    }
    public withDomain(domain: DomainsDetail): ShowDomainDetailByNameResponse {
        this['domain'] = domain;
        return this;
    }
}