import { RouteRespsResource } from './RouteRespsResource';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListRoutesResponse extends SdkResponse {
    public routeResps?: Array<RouteRespsResource>;
    public totalSize?: number;
    public constructor() { 
        super();
    }
    public withRouteResps(routeResps: Array<RouteRespsResource>): ListRoutesResponse {
        this['routeResps'] = routeResps;
        return this;
    }
    public withTotalSize(totalSize: number): ListRoutesResponse {
        this['totalSize'] = totalSize;
        return this;
    }
}