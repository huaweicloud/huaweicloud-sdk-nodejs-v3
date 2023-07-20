import { RouteTable } from './RouteTable';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateRouteTableResponse extends SdkResponse {
    private 'route_table'?: RouteTable;
    private 'request_id'?: string;
    private 'X-Client-Token'?: string;
    public constructor() { 
        super();
    }
    public withRouteTable(routeTable: RouteTable): CreateRouteTableResponse {
        this['route_table'] = routeTable;
        return this;
    }
    public set routeTable(routeTable: RouteTable  | undefined) {
        this['route_table'] = routeTable;
    }
    public get routeTable(): RouteTable | undefined {
        return this['route_table'];
    }
    public withRequestId(requestId: string): CreateRouteTableResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withXClientToken(xClientToken: string): CreateRouteTableResponse {
        this['X-Client-Token'] = xClientToken;
        return this;
    }
    public set xClientToken(xClientToken: string  | undefined) {
        this['X-Client-Token'] = xClientToken;
    }
    public get xClientToken(): string | undefined {
        return this['X-Client-Token'];
    }
}