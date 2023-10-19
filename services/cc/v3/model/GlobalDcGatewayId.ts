

export class GlobalDcGatewayId {
    private 'global_dc_gateway_id'?: string;
    public constructor(globalDcGatewayId?: string) { 
        this['global_dc_gateway_id'] = globalDcGatewayId;
    }
    public withGlobalDcGatewayId(globalDcGatewayId: string): GlobalDcGatewayId {
        this['global_dc_gateway_id'] = globalDcGatewayId;
        return this;
    }
    public set globalDcGatewayId(globalDcGatewayId: string  | undefined) {
        this['global_dc_gateway_id'] = globalDcGatewayId;
    }
    public get globalDcGatewayId(): string | undefined {
        return this['global_dc_gateway_id'];
    }
}