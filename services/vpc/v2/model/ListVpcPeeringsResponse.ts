import { NeutronPageLink } from './NeutronPageLink';
import { VpcPeering } from './VpcPeering';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListVpcPeeringsResponse extends SdkResponse {
    public peerings?: Array<VpcPeering>;
    private 'peerings_links'?: Array<NeutronPageLink> | undefined;
    public constructor() { 
        super();
    }
    public withPeerings(peerings: Array<VpcPeering>): ListVpcPeeringsResponse {
        this['peerings'] = peerings;
        return this;
    }
    public withPeeringsLinks(peeringsLinks: Array<NeutronPageLink>): ListVpcPeeringsResponse {
        this['peerings_links'] = peeringsLinks;
        return this;
    }
    public set peeringsLinks(peeringsLinks: Array<NeutronPageLink> | undefined) {
        this['peerings_links'] = peeringsLinks;
    }
    public get peeringsLinks() {
        return this['peerings_links'];
    }
}