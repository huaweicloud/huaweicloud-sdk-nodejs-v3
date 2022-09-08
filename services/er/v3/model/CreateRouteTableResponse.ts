import { RouteTable } from './RouteTable';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateRouteTableResponse extends SdkResponse {
    private 'route_table'?: RouteTable | undefined;
    private 'request_id'?: string | undefined;
    private 'X-Client-Token'?: string | undefined;
    public constructor() { 
        super();
    }
    public withRouteTable(routeTable: RouteTable): CreateRouteTableResponse {
        this['route_table'] = routeTable;
        return this;
    }
    public set routeTable(routeTable: RouteTable | undefined) {
        this['route_table'] = routeTable;
    }
    public get routeTable() {
        return this['route_table'];
    }
    public withRequestId(requestId: string): CreateRouteTableResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId() {
        return this['request_id'];
    }
    public withXClientToken(xClientToken: string): CreateRouteTableResponse {
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