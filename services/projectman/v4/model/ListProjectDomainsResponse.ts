import { CreateProjectDomainResponseBody } from './CreateProjectDomainResponseBody';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListProjectDomainsResponse extends SdkResponse {
    public total?: number;
    public domains?: Array<CreateProjectDomainResponseBody>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListProjectDomainsResponse {
        this['total'] = total;
        return this;
    }
    public withDomains(domains: Array<CreateProjectDomainResponseBody>): ListProjectDomainsResponse {
        this['domains'] = domains;
        return this;
    }
}