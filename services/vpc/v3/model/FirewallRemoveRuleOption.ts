import { FirewallRemoveRuleItemOption } from './FirewallRemoveRuleItemOption';


export class FirewallRemoveRuleOption {
    private 'ingress_rules'?: Array<FirewallRemoveRuleItemOption>;
    private 'egress_rules'?: Array<FirewallRemoveRuleItemOption>;
    public constructor() { 
    }
    public withIngressRules(ingressRules: Array<FirewallRemoveRuleItemOption>): FirewallRemoveRuleOption {
        this['ingress_rules'] = ingressRules;
        return this;
    }
    public set ingressRules(ingressRules: Array<FirewallRemoveRuleItemOption>  | undefined) {
        this['ingress_rules'] = ingressRules;
    }
    public get ingressRules(): Array<FirewallRemoveRuleItemOption> | undefined {
        return this['ingress_rules'];
    }
    public withEgressRules(egressRules: Array<FirewallRemoveRuleItemOption>): FirewallRemoveRuleOption {
        this['egress_rules'] = egressRules;
        return this;
    }
    public set egressRules(egressRules: Array<FirewallRemoveRuleItemOption>  | undefined) {
        this['egress_rules'] = egressRules;
    }
    public get egressRules(): Array<FirewallRemoveRuleItemOption> | undefined {
        return this['egress_rules'];
    }
}