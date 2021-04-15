import { VpcRoute } from './VpcRoute';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateVpcRouteResponse extends SdkResponse {
    public route?: VpcRoute;
    public constructor() { 
        super();
    }
    public withRoute(route: VpcRoute): CreateVpcRouteResponse {
        this['route'] = route;
        return this;
    }
}