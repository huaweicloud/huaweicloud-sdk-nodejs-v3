import { NeutronPageLink } from './NeutronPageLink';
import { NeutronRouter } from './NeutronRouter';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class NeutronListRoutersResponse extends SdkResponse {
    public routers?: Array<NeutronRouter>;
    private 'routers_links'?: Array<NeutronPageLink> | undefined;
    public constructor() { 
        super();
    }
    public withRouters(routers: Array<NeutronRouter>): NeutronListRoutersResponse {
        this['routers'] = routers;
        return this;
    }
    public withRoutersLinks(routersLinks: Array<NeutronPageLink>): NeutronListRoutersResponse {
        this['routers_links'] = routersLinks;
        return this;
    }
    public set routersLinks(routersLinks: Array<NeutronPageLink> | undefined) {
        this['routers_links'] = routersLinks;
    }
    public get routersLinks() {
        return this['routers_links'];
    }
}