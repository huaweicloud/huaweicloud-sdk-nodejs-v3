import { CommonRoutetable } from './CommonRoutetable';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListGdgwRouteTablesResponse extends SdkResponse {
    private 'request_id'?: string;
    private 'gdgw_routetable'?: Array<CommonRoutetable>;
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
    public withGdgwRoutetable(gdgwRoutetable: Array<CommonRoutetable>): ListGdgwRouteTablesResponse {
        this['gdgw_routetable'] = gdgwRoutetable;
        return this;
    }
    public set gdgwRoutetable(gdgwRoutetable: Array<CommonRoutetable>  | undefined) {
        this['gdgw_routetable'] = gdgwRoutetable;
    }
    public get gdgwRoutetable(): Array<CommonRoutetable> | undefined {
        return this['gdgw_routetable'];
    }
}