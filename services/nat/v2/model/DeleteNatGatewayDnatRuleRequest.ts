

export class DeleteNatGatewayDnatRuleRequest {
    private 'nat_gateway_id'?: string;
    private 'dnat_rule_id'?: string;
    public constructor(natGatewayId?: string, dnatRuleId?: string) { 
        this['nat_gateway_id'] = natGatewayId;
        this['dnat_rule_id'] = dnatRuleId;
    }
    public withNatGatewayId(natGatewayId: string): DeleteNatGatewayDnatRuleRequest {
        this['nat_gateway_id'] = natGatewayId;
        return this;
    }
    public set natGatewayId(natGatewayId: string  | undefined) {
        this['nat_gateway_id'] = natGatewayId;
    }
    public get natGatewayId(): string | undefined {
        return this['nat_gateway_id'];
    }
    public withDnatRuleId(dnatRuleId: string): DeleteNatGatewayDnatRuleRequest {
        this['dnat_rule_id'] = dnatRuleId;
        return this;
    }
    public set dnatRuleId(dnatRuleId: string  | undefined) {
        this['dnat_rule_id'] = dnatRuleId;
    }
    public get dnatRuleId(): string | undefined {
        return this['dnat_rule_id'];
    }
}