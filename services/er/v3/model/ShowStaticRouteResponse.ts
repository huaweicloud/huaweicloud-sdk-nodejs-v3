import { Route } from './Route';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowStaticRouteResponse extends SdkResponse {
    public route?: Route;
    private 'request_id'?: string;
    public constructor() { 
        super();
    }
    public withRoute(route: Route): ShowStaticRouteResponse {
        this['route'] = route;
        return this;
    }
    public withRequestId(requestId: string): ShowStaticRouteResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
}