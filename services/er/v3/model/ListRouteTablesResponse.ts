import { PageInfo } from './PageInfo';
import { RouteTable } from './RouteTable';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListRouteTablesResponse extends SdkResponse {
    private 'route_tables'?: Array<RouteTable> | undefined;
    private 'request_id'?: string | undefined;
    private 'page_info'?: PageInfo | undefined;
    public constructor() { 
        super();
    }
    public withRouteTables(routeTables: Array<RouteTable>): ListRouteTablesResponse {
        this['route_tables'] = routeTables;
        return this;
    }
    public set routeTables(routeTables: Array<RouteTable> | undefined) {
        this['route_tables'] = routeTables;
    }
    public get routeTables() {
        return this['route_tables'];
    }
    public withRequestId(requestId: string): ListRouteTablesResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId() {
        return this['request_id'];
    }
    public withPageInfo(pageInfo: PageInfo): ListRouteTablesResponse {
        this['page_info'] = pageInfo;
        return this;
    }
    public set pageInfo(pageInfo: PageInfo | undefined) {
        this['page_info'] = pageInfo;
    }
    public get pageInfo() {
        return this['page_info'];
    }
}