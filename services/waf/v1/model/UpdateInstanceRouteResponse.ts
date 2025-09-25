import { RouteBody } from './RouteBody';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateInstanceRouteResponse extends SdkResponse {
    public body?: Array<RouteBody>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<RouteBody>): UpdateInstanceRouteResponse {
        this['body'] = body;
        return this;
    }
}