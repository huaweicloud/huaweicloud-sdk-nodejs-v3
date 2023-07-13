
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class AssociateRouterResponse extends SdkResponse {
    private 'router_id'?: string | undefined;
    private 'router_region'?: string | undefined;
    public status?: string;
    public constructor() { 
        super();
    }
    public withRouterId(routerId: string): AssociateRouterResponse {
        this['router_id'] = routerId;
        return this;
    }
    public set routerId(routerId: string | undefined) {
        this['router_id'] = routerId;
    }
    public get routerId() {
        return this['router_id'];
    }
    public withRouterRegion(routerRegion: string): AssociateRouterResponse {
        this['router_region'] = routerRegion;
        return this;
    }
    public set routerRegion(routerRegion: string | undefined) {
        this['router_region'] = routerRegion;
    }
    public get routerRegion() {
        return this['router_region'];
    }
    public withStatus(status: string): AssociateRouterResponse {
        this['status'] = status;
        return this;
    }
}