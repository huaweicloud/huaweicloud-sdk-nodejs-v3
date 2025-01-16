import { CommonRoutetable } from './CommonRoutetable';
import { PageInfo } from './PageInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListGdgwRouteTablesResponse extends SdkResponse {
    private 'request_id'?: string;
    private 'gdgw_routetables'?: Array<CommonRoutetable>;
    private 'total_count'?: number;
    private 'page_info'?: PageInfo;
    public constructor() { 
        super();
    }
    public withRequestId(requestId: string): ListGdgwRouteTablesResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withGdgwRoutetables(gdgwRoutetables: Array<CommonRoutetable>): ListGdgwRouteTablesResponse {
        this['gdgw_routetables'] = gdgwRoutetables;
        return this;
    }
    public set gdgwRoutetables(gdgwRoutetables: Array<CommonRoutetable>  | undefined) {
        this['gdgw_routetables'] = gdgwRoutetables;
    }
    public get gdgwRoutetables(): Array<CommonRoutetable> | undefined {
        return this['gdgw_routetables'];
    }
    public withTotalCount(totalCount: number): ListGdgwRouteTablesResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
    public withPageInfo(pageInfo: PageInfo): ListGdgwRouteTablesResponse {
        this['page_info'] = pageInfo;
        return this;
    }
    public set pageInfo(pageInfo: PageInfo  | undefined) {
        this['page_info'] = pageInfo;
    }
    public get pageInfo(): PageInfo | undefined {
        return this['page_info'];
    }
}