import { ImportRuleSecrecyLevelDto } from './ImportRuleSecrecyLevelDto';


export class ImportBuiltinCategoryParam {
    private 'rule_secrecy_level_list'?: Array<ImportRuleSecrecyLevelDto>;
    public constructor() { 
    }
    public withRuleSecrecyLevelList(ruleSecrecyLevelList: Array<ImportRuleSecrecyLevelDto>): ImportBuiltinCategoryParam {
        this['rule_secrecy_level_list'] = ruleSecrecyLevelList;
        return this;
    }
    public set ruleSecrecyLevelList(ruleSecrecyLevelList: Array<ImportRuleSecrecyLevelDto>  | undefined) {
        this['rule_secrecy_level_list'] = ruleSecrecyLevelList;
    }
    public get ruleSecrecyLevelList(): Array<ImportRuleSecrecyLevelDto> | undefined {
        return this['rule_secrecy_level_list'];
    }
}