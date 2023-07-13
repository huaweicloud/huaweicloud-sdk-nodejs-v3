import { Domains } from './Domains';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListDomainsResponse extends SdkResponse {
    public total?: number;
    public domains?: Array<Domains>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListDomainsResponse {
        this['total'] = total;
        return this;
    }
    public withDomains(domains: Array<Domains>): ListDomainsResponse {
        this['domains'] = domains;
        return this;
    }
}