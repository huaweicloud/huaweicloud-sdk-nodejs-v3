

export class GlobalDcGatewayRegionId {
    private 'global_dc_gateway_region_id'?: string;
    public constructor(globalDcGatewayRegionId?: string) { 
        this['global_dc_gateway_region_id'] = globalDcGatewayRegionId;
    }
    public withGlobalDcGatewayRegionId(globalDcGatewayRegionId: string): GlobalDcGatewayRegionId {
        this['global_dc_gateway_region_id'] = globalDcGatewayRegionId;
        return this;
    }
    public set globalDcGatewayRegionId(globalDcGatewayRegionId: string  | undefined) {
        this['global_dc_gateway_region_id'] = globalDcGatewayRegionId;
    }
    public get globalDcGatewayRegionId(): string | undefined {
        return this['global_dc_gateway_region_id'];
    }
}