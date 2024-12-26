import { AdvancedIpsRuleVo } from './AdvancedIpsRuleVo';


export class AdvancedIpsRuleListVo {
    private 'advanced_ips_rules'?: Array<AdvancedIpsRuleVo>;
    public total?: number;
    public constructor() { 
    }
    public withAdvancedIpsRules(advancedIpsRules: Array<AdvancedIpsRuleVo>): AdvancedIpsRuleListVo {
        this['advanced_ips_rules'] = advancedIpsRules;
        return this;
    }
    public set advancedIpsRules(advancedIpsRules: Array<AdvancedIpsRuleVo>  | undefined) {
        this['advanced_ips_rules'] = advancedIpsRules;
    }
    public get advancedIpsRules(): Array<AdvancedIpsRuleVo> | undefined {
        return this['advanced_ips_rules'];
    }
    public withTotal(total: number): AdvancedIpsRuleListVo {
        this['total'] = total;
        return this;
    }
}