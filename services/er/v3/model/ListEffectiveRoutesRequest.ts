

export class ListEffectiveRoutesRequest {
    private 'route_table_id': string | undefined;
    public limit?: number;
    public marker?: string;
    public destination?: Array<string>;
    private 'resource_type'?: Array<ListEffectiveRoutesRequestResourceTypeEnum> | undefined;
    public constructor(routeTableId?: any) { 
        this['route_table_id'] = routeTableId;
    }
    public withRouteTableId(routeTableId: string): ListEffectiveRoutesRequest {
        this['route_table_id'] = routeTableId;
        return this;
    }
    public set routeTableId(routeTableId: string | undefined) {
        this['route_table_id'] = routeTableId;
    }
    public get routeTableId() {
        return this['route_table_id'];
    }
    public withLimit(limit: number): ListEffectiveRoutesRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListEffectiveRoutesRequest {
        this['marker'] = marker;
        return this;
    }
    public withDestination(destination: Array<string>): ListEffectiveRoutesRequest {
        this['destination'] = destination;
        return this;
    }
    public withResourceType(resourceType: Array<ListEffectiveRoutesRequestResourceTypeEnum>): ListEffectiveRoutesRequest {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: Array<ListEffectiveRoutesRequestResourceTypeEnum> | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType() {
        return this['resource_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListEffectiveRoutesRequestResourceTypeEnum {
    VPC = 'vpc',
    VPN = 'vpn',
    DGW = 'dgw',
    VGW = 'vgw',
    PEERING = 'peering',
    CAN = 'can',
    GDGW = 'gdgw'
}
