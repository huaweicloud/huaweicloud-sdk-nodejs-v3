

export class DeleteNatGatewayTagRequest {
    private 'nat_gateway_id'?: string;
    public key?: string;
    public constructor(natGatewayId?: string, key?: string) { 
        this['nat_gateway_id'] = natGatewayId;
        this['key'] = key;
    }
    public withNatGatewayId(natGatewayId: string): DeleteNatGatewayTagRequest {
        this['nat_gateway_id'] = natGatewayId;
        return this;
    }
    public set natGatewayId(natGatewayId: string  | undefined) {
        this['nat_gateway_id'] = natGatewayId;
    }
    public get natGatewayId(): string | undefined {
        return this['nat_gateway_id'];
    }
    public withKey(key: string): DeleteNatGatewayTagRequest {
        this['key'] = key;
        return this;
    }
}