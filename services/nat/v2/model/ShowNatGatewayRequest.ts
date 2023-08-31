

export class ShowNatGatewayRequest {
    private 'nat_gateway_id'?: string;
    public constructor(natGatewayId?: string) { 
        this['nat_gateway_id'] = natGatewayId;
    }
    public withNatGatewayId(natGatewayId: string): ShowNatGatewayRequest {
        this['nat_gateway_id'] = natGatewayId;
        return this;
    }
    public set natGatewayId(natGatewayId: string  | undefined) {
        this['nat_gateway_id'] = natGatewayId;
    }
    public get natGatewayId(): string | undefined {
        return this['nat_gateway_id'];
    }
}