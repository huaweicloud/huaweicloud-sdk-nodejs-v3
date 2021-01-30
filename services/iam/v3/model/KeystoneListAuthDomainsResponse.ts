import { Domains } from './Domains';
import { LinksSelf } from './LinksSelf';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class KeystoneListAuthDomainsResponse extends SdkResponse {
    public domains?: Array<Domains>;
    public links?: LinksSelf;
    public constructor() { 
        super();
    }
    public withDomains(domains: Array<Domains>): KeystoneListAuthDomainsResponse {
        this['domains'] = domains;
        return this;
    }
    public withLinks(links: LinksSelf): KeystoneListAuthDomainsResponse {
        this['links'] = links;
        return this;
    }
}