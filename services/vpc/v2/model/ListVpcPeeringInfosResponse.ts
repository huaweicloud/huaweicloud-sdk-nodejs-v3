import { NeutronPageLink } from './NeutronPageLink';
import { VpcPeering } from './VpcPeering';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListVpcPeeringInfosResponse extends SdkResponse {
    private 'peering_infos'?: Array<VpcPeering>;
    private 'peering_infos_links'?: Array<NeutronPageLink>;
    public constructor() { 
        super();
    }
    public withPeeringInfos(peeringInfos: Array<VpcPeering>): ListVpcPeeringInfosResponse {
        this['peering_infos'] = peeringInfos;
        return this;
    }
    public set peeringInfos(peeringInfos: Array<VpcPeering>  | undefined) {
        this['peering_infos'] = peeringInfos;
    }
    public get peeringInfos(): Array<VpcPeering> | undefined {
        return this['peering_infos'];
    }
    public withPeeringInfosLinks(peeringInfosLinks: Array<NeutronPageLink>): ListVpcPeeringInfosResponse {
        this['peering_infos_links'] = peeringInfosLinks;
        return this;
    }
    public set peeringInfosLinks(peeringInfosLinks: Array<NeutronPageLink>  | undefined) {
        this['peering_infos_links'] = peeringInfosLinks;
    }
    public get peeringInfosLinks(): Array<NeutronPageLink> | undefined {
        return this['peering_infos_links'];
    }
}