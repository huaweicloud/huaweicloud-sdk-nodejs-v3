import { FirewallInsertRuleItemOption } from './FirewallInsertRuleItemOption';


export class FirewallInsertRuleOption {
    private 'ingress_rules'?: Array<FirewallInsertRuleItemOption>;
    private 'egress_rules'?: Array<FirewallInsertRuleItemOption>;
    private 'insert_after_rule'?: string;
    public constructor() { 
    }
    public withIngressRules(ingressRules: Array<FirewallInsertRuleItemOption>): FirewallInsertRuleOption {
        this['ingress_rules'] = ingressRules;
        return this;
    }
    public set ingressRules(ingressRules: Array<FirewallInsertRuleItemOption>  | undefined) {
        this['ingress_rules'] = ingressRules;
    }
    public get ingressRules(): Array<FirewallInsertRuleItemOption> | undefined {
        return this['ingress_rules'];
    }
    public withEgressRules(egressRules: Array<FirewallInsertRuleItemOption>): FirewallInsertRuleOption {
        this['egress_rules'] = egressRules;
        return this;
    }
    public set egressRules(egressRules: Array<FirewallInsertRuleItemOption>  | undefined) {
        this['egress_rules'] = egressRules;
    }
    public get egressRules(): Array<FirewallInsertRuleItemOption> | undefined {
        return this['egress_rules'];
    }
    public withInsertAfterRule(insertAfterRule: string): FirewallInsertRuleOption {
        this['insert_after_rule'] = insertAfterRule;
        return this;
    }
    public set insertAfterRule(insertAfterRule: string  | undefined) {
        this['insert_after_rule'] = insertAfterRule;
    }
    public get insertAfterRule(): string | undefined {
        return this['insert_after_rule'];
    }
}