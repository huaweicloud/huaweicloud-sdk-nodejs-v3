import { NeutronRouter } from './NeutronRouter';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class NeutronShowRouterResponse extends SdkResponse {
    public router?: NeutronRouter;
    public constructor() { 
        super();
    }
    public withRouter(router: NeutronRouter): NeutronShowRouterResponse {
        this['router'] = router;
        return this;
    }
}