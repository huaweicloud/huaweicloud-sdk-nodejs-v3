import { RouteTableListResp } from './RouteTableListResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListRouteTablesResponse extends SdkResponse {
    public routetables?: Array<RouteTableListResp>;
    public constructor() { 
        super();
    }
    public withRoutetables(routetables: Array<RouteTableListResp>): ListRouteTablesResponse {
        this['routetables'] = routetables;
        return this;
    }
}