

export class CreateNatGatewaySnatRuleOption {
    private 'nat_gateway_id'?: string;
    public cidr?: string;
    private 'network_id'?: string;
    public description?: string;
    private 'source_type'?: number;
    private 'floating_ip_id'?: string;
    private 'global_eip_id'?: string;
    public constructor(natGatewayId?: string, floatingIpId?: string) { 
        this['nat_gateway_id'] = natGatewayId;
        this['floating_ip_id'] = floatingIpId;
    }
    public withNatGatewayId(natGatewayId: string): CreateNatGatewaySnatRuleOption {
        this['nat_gateway_id'] = natGatewayId;
        return this;
    }
    public set natGatewayId(natGatewayId: string  | undefined) {
        this['nat_gateway_id'] = natGatewayId;
    }
    public get natGatewayId(): string | undefined {
        return this['nat_gateway_id'];
    }
    public withCidr(cidr: string): CreateNatGatewaySnatRuleOption {
        this['cidr'] = cidr;
        return this;
    }
    public withNetworkId(networkId: string): CreateNatGatewaySnatRuleOption {
        this['network_id'] = networkId;
        return this;
    }
    public set networkId(networkId: string  | undefined) {
        this['network_id'] = networkId;
    }
    public get networkId(): string | undefined {
        return this['network_id'];
    }
    public withDescription(description: string): CreateNatGatewaySnatRuleOption {
        this['description'] = description;
        return this;
    }
    public withSourceType(sourceType: number): CreateNatGatewaySnatRuleOption {
        this['source_type'] = sourceType;
        return this;
    }
    public set sourceType(sourceType: number  | undefined) {
        this['source_type'] = sourceType;
    }
    public get sourceType(): number | undefined {
        return this['source_type'];
    }
    public withFloatingIpId(floatingIpId: string): CreateNatGatewaySnatRuleOption {
        this['floating_ip_id'] = floatingIpId;
        return this;
    }
    public set floatingIpId(floatingIpId: string  | undefined) {
        this['floating_ip_id'] = floatingIpId;
    }
    public get floatingIpId(): string | undefined {
        return this['floating_ip_id'];
    }
    public withGlobalEipId(globalEipId: string): CreateNatGatewaySnatRuleOption {
        this['global_eip_id'] = globalEipId;
        return this;
    }
    public set globalEipId(globalEipId: string  | undefined) {
        this['global_eip_id'] = globalEipId;
    }
    public get globalEipId(): string | undefined {
        return this['global_eip_id'];
    }
}