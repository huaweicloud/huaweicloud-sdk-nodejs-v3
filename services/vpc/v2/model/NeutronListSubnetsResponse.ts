import { NeutronPageLink } from './NeutronPageLink';
import { NeutronSubnet } from './NeutronSubnet';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class NeutronListSubnetsResponse extends SdkResponse {
    public subnets?: Array<NeutronSubnet>;
    private 'subnets_links'?: Array<NeutronPageLink>;
    public constructor() { 
        super();
    }
    public withSubnets(subnets: Array<NeutronSubnet>): NeutronListSubnetsResponse {
        this['subnets'] = subnets;
        return this;
    }
    public withSubnetsLinks(subnetsLinks: Array<NeutronPageLink>): NeutronListSubnetsResponse {
        this['subnets_links'] = subnetsLinks;
        return this;
    }
    public set subnetsLinks(subnetsLinks: Array<NeutronPageLink>  | undefined) {
        this['subnets_links'] = subnetsLinks;
    }
    public get subnetsLinks(): Array<NeutronPageLink> | undefined {
        return this['subnets_links'];
    }
}