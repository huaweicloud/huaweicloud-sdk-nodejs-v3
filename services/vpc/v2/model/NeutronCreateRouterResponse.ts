import { NeutronRouter } from './NeutronRouter';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class NeutronCreateRouterResponse extends SdkResponse {
    public router?: NeutronRouter;
    public constructor() { 
        super();
    }
    public withRouter(router: NeutronRouter): NeutronCreateRouterResponse {
        this['router'] = router;
        return this;
    }
}