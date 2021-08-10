import { RouteTableResp } from './RouteTableResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateRouteTableResponse extends SdkResponse {
    public routetable?: RouteTableResp;
    public constructor() { 
        super();
    }
    public withRoutetable(routetable: RouteTableResp): UpdateRouteTableResponse {
        this['routetable'] = routetable;
        return this;
    }
}