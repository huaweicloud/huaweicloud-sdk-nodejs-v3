

export class DataClassificationGroupUpdateDTO {
    public name?: string;
    private 'rule_ids'?: Array<string>;
    public description?: string;
    public constructor(name?: string, ruleIds?: Array<string>) { 
        this['name'] = name;
        this['rule_ids'] = ruleIds;
    }
    public withName(name: string): DataClassificationGroupUpdateDTO {
        this['name'] = name;
        return this;
    }
    public withRuleIds(ruleIds: Array<string>): DataClassificationGroupUpdateDTO {
        this['rule_ids'] = ruleIds;
        return this;
    }
    public set ruleIds(ruleIds: Array<string>  | undefined) {
        this['rule_ids'] = ruleIds;
    }
    public get ruleIds(): Array<string> | undefined {
        return this['rule_ids'];
    }
    public withDescription(description: string): DataClassificationGroupUpdateDTO {
        this['description'] = description;
        return this;
    }
}