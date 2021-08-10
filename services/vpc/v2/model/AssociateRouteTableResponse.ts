import { RouteTableResp } from './RouteTableResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class AssociateRouteTableResponse extends SdkResponse {
    public routetable?: RouteTableResp;
    public constructor() { 
        super();
    }
    public withRoutetable(routetable: RouteTableResp): AssociateRouteTableResponse {
        this['routetable'] = routetable;
        return this;
    }
}