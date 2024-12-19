import { ShowGdgwRoutetable } from './ShowGdgwRoutetable';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListGdgwRouteTablesResponse extends SdkResponse {
    private 'request_id'?: string;
    private 'gdgw_routetable'?: Array<ShowGdgwRoutetable>;
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
    public withGdgwRoutetable(gdgwRoutetable: Array<ShowGdgwRoutetable>): ListGdgwRouteTablesResponse {
        this['gdgw_routetable'] = gdgwRoutetable;
        return this;
    }
    public set gdgwRoutetable(gdgwRoutetable: Array<ShowGdgwRoutetable>  | undefined) {
        this['gdgw_routetable'] = gdgwRoutetable;
    }
    public get gdgwRoutetable(): Array<ShowGdgwRoutetable> | undefined {
        return this['gdgw_routetable'];
    }
}