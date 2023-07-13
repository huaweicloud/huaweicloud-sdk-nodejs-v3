import { NeutronRouter } from './NeutronRouter';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class NeutronUpdateRouterResponse extends SdkResponse {
    public router?: NeutronRouter;
    public constructor() { 
        super();
    }
    public withRouter(router: NeutronRouter): NeutronUpdateRouterResponse {
        this['router'] = router;
        return this;
    }
}