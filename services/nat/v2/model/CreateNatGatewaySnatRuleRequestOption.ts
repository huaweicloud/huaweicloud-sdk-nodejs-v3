import { CreateNatGatewaySnatRuleOption } from './CreateNatGatewaySnatRuleOption';


export class CreateNatGatewaySnatRuleRequestOption {
    private 'snat_rule'?: CreateNatGatewaySnatRuleOption;
    public constructor(snatRule?: CreateNatGatewaySnatRuleOption) { 
        this['snat_rule'] = snatRule;
    }
    public withSnatRule(snatRule: CreateNatGatewaySnatRuleOption): CreateNatGatewaySnatRuleRequestOption {
        this['snat_rule'] = snatRule;
        return this;
    }
    public set snatRule(snatRule: CreateNatGatewaySnatRuleOption  | undefined) {
        this['snat_rule'] = snatRule;
    }
    public get snatRule(): CreateNatGatewaySnatRuleOption | undefined {
        return this['snat_rule'];
    }
}