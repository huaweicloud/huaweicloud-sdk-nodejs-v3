import { RouteTableResp } from './RouteTableResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowRouteTableResponse extends SdkResponse {
    public routetable?: RouteTableResp;
    public constructor() { 
        super();
    }
    public withRoutetable(routetable: RouteTableResp): ShowRouteTableResponse {
        this['routetable'] = routetable;
        return this;
    }
}