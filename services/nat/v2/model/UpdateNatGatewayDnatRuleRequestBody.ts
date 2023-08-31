import { UpdateNatGatewayDnatRuleOption } from './UpdateNatGatewayDnatRuleOption';


export class UpdateNatGatewayDnatRuleRequestBody {
    private 'dnat_rule'?: UpdateNatGatewayDnatRuleOption;
    public constructor(dnatRule?: UpdateNatGatewayDnatRuleOption) { 
        this['dnat_rule'] = dnatRule;
    }
    public withDnatRule(dnatRule: UpdateNatGatewayDnatRuleOption): UpdateNatGatewayDnatRuleRequestBody {
        this['dnat_rule'] = dnatRule;
        return this;
    }
    public set dnatRule(dnatRule: UpdateNatGatewayDnatRuleOption  | undefined) {
        this['dnat_rule'] = dnatRule;
    }
    public get dnatRule(): UpdateNatGatewayDnatRuleOption | undefined {
        return this['dnat_rule'];
    }
}