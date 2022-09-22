import { RouteBody } from './RouteBody';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListHostRouteResponse extends SdkResponse {
    public total?: number;
    public items?: Array<RouteBody>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListHostRouteResponse {
        this['total'] = total;
        return this;
    }
    public withItems(items: Array<RouteBody>): ListHostRouteResponse {
        this['items'] = items;
        return this;
    }
}