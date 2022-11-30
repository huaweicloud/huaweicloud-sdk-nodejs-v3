import { Domains } from './Domains';
import { LinksSelf } from './LinksSelf';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class KeystoneListFederationDomainsResponse extends SdkResponse {
    public domains?: Array<Domains>;
    public links?: LinksSelf;
    public constructor() { 
        super();
    }
    public withDomains(domains: Array<Domains>): KeystoneListFederationDomainsResponse {
        this['domains'] = domains;
        return this;
    }
    public withLinks(links: LinksSelf): KeystoneListFederationDomainsResponse {
        this['links'] = links;
        return this;
    }
}