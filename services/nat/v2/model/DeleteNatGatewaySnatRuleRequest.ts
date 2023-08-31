

export class DeleteNatGatewaySnatRuleRequest {
    private 'nat_gateway_id'?: string;
    private 'snat_rule_id'?: string;
    public constructor(natGatewayId?: string, snatRuleId?: string) { 
        this['nat_gateway_id'] = natGatewayId;
        this['snat_rule_id'] = snatRuleId;
    }
    public withNatGatewayId(natGatewayId: string): DeleteNatGatewaySnatRuleRequest {
        this['nat_gateway_id'] = natGatewayId;
        return this;
    }
    public set natGatewayId(natGatewayId: string  | undefined) {
        this['nat_gateway_id'] = natGatewayId;
    }
    public get natGatewayId(): string | undefined {
        return this['nat_gateway_id'];
    }
    public withSnatRuleId(snatRuleId: string): DeleteNatGatewaySnatRuleRequest {
        this['snat_rule_id'] = snatRuleId;
        return this;
    }
    public set snatRuleId(snatRuleId: string  | undefined) {
        this['snat_rule_id'] = snatRuleId;
    }
    public get snatRuleId(): string | undefined {
        return this['snat_rule_id'];
    }
}