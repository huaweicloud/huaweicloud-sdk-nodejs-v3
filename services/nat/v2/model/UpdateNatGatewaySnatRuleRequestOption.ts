import { UpdateNatGatewaySnatRuleOption } from './UpdateNatGatewaySnatRuleOption';


export class UpdateNatGatewaySnatRuleRequestOption {
    private 'snat_rule'?: UpdateNatGatewaySnatRuleOption;
    public constructor(snatRule?: UpdateNatGatewaySnatRuleOption) { 
        this['snat_rule'] = snatRule;
    }
    public withSnatRule(snatRule: UpdateNatGatewaySnatRuleOption): UpdateNatGatewaySnatRuleRequestOption {
        this['snat_rule'] = snatRule;
        return this;
    }
    public set snatRule(snatRule: UpdateNatGatewaySnatRuleOption  | undefined) {
        this['snat_rule'] = snatRule;
    }
    public get snatRule(): UpdateNatGatewaySnatRuleOption | undefined {
        return this['snat_rule'];
    }
}