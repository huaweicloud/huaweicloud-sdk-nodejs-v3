import { FloatingIpResp } from './FloatingIpResp';
import { Pager } from './Pager';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class NeutronListFloatingIpsResponse extends SdkResponse {
    public floatingips?: Array<FloatingIpResp>;
    private 'floatingips_links'?: Array<Pager>;
    public constructor() { 
        super();
    }
    public withFloatingips(floatingips: Array<FloatingIpResp>): NeutronListFloatingIpsResponse {
        this['floatingips'] = floatingips;
        return this;
    }
    public withFloatingipsLinks(floatingipsLinks: Array<Pager>): NeutronListFloatingIpsResponse {
        this['floatingips_links'] = floatingipsLinks;
        return this;
    }
    public set floatingipsLinks(floatingipsLinks: Array<Pager>  | undefined) {
        this['floatingips_links'] = floatingipsLinks;
    }
    public get floatingipsLinks(): Array<Pager> | undefined {
        return this['floatingips_links'];
    }
}