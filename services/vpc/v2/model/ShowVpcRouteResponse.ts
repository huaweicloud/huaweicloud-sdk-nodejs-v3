import { VpcRoute } from './VpcRoute';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowVpcRouteResponse extends SdkResponse {
    public route?: VpcRoute;
    public constructor() { 
        super();
    }
    public withRoute(route: VpcRoute): ShowVpcRouteResponse {
        this['route'] = route;
        return this;
    }
}