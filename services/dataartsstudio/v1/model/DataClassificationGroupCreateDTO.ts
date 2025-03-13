import { DataClassificationGroupCombineRuleDTO } from './DataClassificationGroupCombineRuleDTO';


export class DataClassificationGroupCreateDTO {
    public name?: string;
    private 'rule_ids'?: Array<string>;
    public description?: string;
    private 'create_rules'?: Array<DataClassificationGroupCombineRuleDTO>;
    public constructor(name?: string, ruleIds?: Array<string>) { 
        this['name'] = name;
        this['rule_ids'] = ruleIds;
    }
    public withName(name: string): DataClassificationGroupCreateDTO {
        this['name'] = name;
        return this;
    }
    public withRuleIds(ruleIds: Array<string>): DataClassificationGroupCreateDTO {
        this['rule_ids'] = ruleIds;
        return this;
    }
    public set ruleIds(ruleIds: Array<string>  | undefined) {
        this['rule_ids'] = ruleIds;
    }
    public get ruleIds(): Array<string> | undefined {
        return this['rule_ids'];
    }
    public withDescription(description: string): DataClassificationGroupCreateDTO {
        this['description'] = description;
        return this;
    }
    public withCreateRules(createRules: Array<DataClassificationGroupCombineRuleDTO>): DataClassificationGroupCreateDTO {
        this['create_rules'] = createRules;
        return this;
    }
    public set createRules(createRules: Array<DataClassificationGroupCombineRuleDTO>  | undefined) {
        this['create_rules'] = createRules;
    }
    public get createRules(): Array<DataClassificationGroupCombineRuleDTO> | undefined {
        return this['create_rules'];
    }
}