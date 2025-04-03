

export class ShowVpnGatewayRoutingTableRequest {
    private 'vgw_id'?: string;
    public limit?: number;
    public marker?: string;
    public offset?: number;
    private 'is_include_nexthop_resource'?: boolean;
    public constructor(vgwId?: string) { 
        this['vgw_id'] = vgwId;
    }
    public withVgwId(vgwId: string): ShowVpnGatewayRoutingTableRequest {
        this['vgw_id'] = vgwId;
        return this;
    }
    public set vgwId(vgwId: string  | undefined) {
        this['vgw_id'] = vgwId;
    }
    public get vgwId(): string | undefined {
        return this['vgw_id'];
    }
    public withLimit(limit: number): ShowVpnGatewayRoutingTableRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ShowVpnGatewayRoutingTableRequest {
        this['marker'] = marker;
        return this;
    }
    public withOffset(offset: number): ShowVpnGatewayRoutingTableRequest {
        this['offset'] = offset;
        return this;
    }
    public withIsIncludeNexthopResource(isIncludeNexthopResource: boolean): ShowVpnGatewayRoutingTableRequest {
        this['is_include_nexthop_resource'] = isIncludeNexthopResource;
        return this;
    }
    public set isIncludeNexthopResource(isIncludeNexthopResource: boolean  | undefined) {
        this['is_include_nexthop_resource'] = isIncludeNexthopResource;
    }
    public get isIncludeNexthopResource(): boolean | undefined {
        return this['is_include_nexthop_resource'];
    }
}