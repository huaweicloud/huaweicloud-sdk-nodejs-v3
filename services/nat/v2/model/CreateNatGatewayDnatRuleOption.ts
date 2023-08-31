import { CreateNatGatewayDnatOption } from './CreateNatGatewayDnatOption';


export class CreateNatGatewayDnatRuleOption {
    private 'dnat_rule'?: CreateNatGatewayDnatOption;
    public constructor(dnatRule?: CreateNatGatewayDnatOption) { 
        this['dnat_rule'] = dnatRule;
    }
    public withDnatRule(dnatRule: CreateNatGatewayDnatOption): CreateNatGatewayDnatRuleOption {
        this['dnat_rule'] = dnatRule;
        return this;
    }
    public set dnatRule(dnatRule: CreateNatGatewayDnatOption  | undefined) {
        this['dnat_rule'] = dnatRule;
    }
    public get dnatRule(): CreateNatGatewayDnatOption | undefined {
        return this['dnat_rule'];
    }
}