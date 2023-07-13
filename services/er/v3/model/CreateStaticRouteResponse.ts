import { Route } from './Route';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateStaticRouteResponse extends SdkResponse {
    public route?: Route;
    private 'request_id'?: string | undefined;
    private 'X-Client-Token'?: string | undefined;
    public constructor() { 
        super();
    }
    public withRoute(route: Route): CreateStaticRouteResponse {
        this['route'] = route;
        return this;
    }
    public withRequestId(requestId: string): CreateStaticRouteResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId() {
        return this['request_id'];
    }
    public withXClientToken(xClientToken: string): CreateStaticRouteResponse {
        this['X-Client-Token'] = xClientToken;
        return this;
    }
    public set xClientToken(xClientToken: string | undefined) {
        this['X-Client-Token'] = xClientToken;
    }
    public get xClientToken() {
        return this['X-Client-Token'];
    }
}