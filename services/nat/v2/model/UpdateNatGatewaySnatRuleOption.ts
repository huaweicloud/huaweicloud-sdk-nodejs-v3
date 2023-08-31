

export class UpdateNatGatewaySnatRuleOption {
    private 'nat_gateway_id'?: string;
    private 'public_ip_address'?: string;
    public description?: string;
    public constructor(natGatewayId?: string) { 
        this['nat_gateway_id'] = natGatewayId;
    }
    public withNatGatewayId(natGatewayId: string): UpdateNatGatewaySnatRuleOption {
        this['nat_gateway_id'] = natGatewayId;
        return this;
    }
    public set natGatewayId(natGatewayId: string  | undefined) {
        this['nat_gateway_id'] = natGatewayId;
    }
    public get natGatewayId(): string | undefined {
        return this['nat_gateway_id'];
    }
    public withPublicIpAddress(publicIpAddress: string): UpdateNatGatewaySnatRuleOption {
        this['public_ip_address'] = publicIpAddress;
        return this;
    }
    public set publicIpAddress(publicIpAddress: string  | undefined) {
        this['public_ip_address'] = publicIpAddress;
    }
    public get publicIpAddress(): string | undefined {
        return this['public_ip_address'];
    }
    public withDescription(description: string): UpdateNatGatewaySnatRuleOption {
        this['description'] = description;
        return this;
    }
}