import { NeutronNetwork } from './NeutronNetwork';
import { NeutronPageLink } from './NeutronPageLink';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class NeutronListNetworksResponse extends SdkResponse {
    public networks?: Array<NeutronNetwork>;
    private 'networks_links'?: Array<NeutronPageLink>;
    public constructor() { 
        super();
    }
    public withNetworks(networks: Array<NeutronNetwork>): NeutronListNetworksResponse {
        this['networks'] = networks;
        return this;
    }
    public withNetworksLinks(networksLinks: Array<NeutronPageLink>): NeutronListNetworksResponse {
        this['networks_links'] = networksLinks;
        return this;
    }
    public set networksLinks(networksLinks: Array<NeutronPageLink>  | undefined) {
        this['networks_links'] = networksLinks;
    }
    public get networksLinks(): Array<NeutronPageLink> | undefined {
        return this['networks_links'];
    }
}