import { FirewallUpdateRuleItemOption } from './FirewallUpdateRuleItemOption';


export class FirewallUpdateRuleOption {
    private 'ingress_rules'?: Array<FirewallUpdateRuleItemOption>;
    private 'egress_rules'?: Array<FirewallUpdateRuleItemOption>;
    public constructor() { 
    }
    public withIngressRules(ingressRules: Array<FirewallUpdateRuleItemOption>): FirewallUpdateRuleOption {
        this['ingress_rules'] = ingressRules;
        return this;
    }
    public set ingressRules(ingressRules: Array<FirewallUpdateRuleItemOption>  | undefined) {
        this['ingress_rules'] = ingressRules;
    }
    public get ingressRules(): Array<FirewallUpdateRuleItemOption> | undefined {
        return this['ingress_rules'];
    }
    public withEgressRules(egressRules: Array<FirewallUpdateRuleItemOption>): FirewallUpdateRuleOption {
        this['egress_rules'] = egressRules;
        return this;
    }
    public set egressRules(egressRules: Array<FirewallUpdateRuleItemOption>  | undefined) {
        this['egress_rules'] = egressRules;
    }
    public get egressRules(): Array<FirewallUpdateRuleItemOption> | undefined {
        return this['egress_rules'];
    }
}