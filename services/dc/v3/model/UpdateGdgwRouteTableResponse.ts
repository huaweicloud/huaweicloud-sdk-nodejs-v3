import { ShowGdgwRoutetable } from './ShowGdgwRoutetable';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateGdgwRouteTableResponse extends SdkResponse {
    private 'request_id'?: string;
    private 'gdgw_routetable'?: Array<ShowGdgwRoutetable>;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withRequestId(requestId: string): UpdateGdgwRouteTableResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withGdgwRoutetable(gdgwRoutetable: Array<ShowGdgwRoutetable>): UpdateGdgwRouteTableResponse {
        this['gdgw_routetable'] = gdgwRoutetable;
        return this;
    }
    public set gdgwRoutetable(gdgwRoutetable: Array<ShowGdgwRoutetable>  | undefined) {
        this['gdgw_routetable'] = gdgwRoutetable;
    }
    public get gdgwRoutetable(): Array<ShowGdgwRoutetable> | undefined {
        return this['gdgw_routetable'];
    }
    public withXRequestId(xRequestId: string): UpdateGdgwRouteTableResponse {
        this['X-Request-Id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string  | undefined) {
        this['X-Request-Id'] = xRequestId;
    }
    public get xRequestId(): string | undefined {
        return this['X-Request-Id'];
    }
}