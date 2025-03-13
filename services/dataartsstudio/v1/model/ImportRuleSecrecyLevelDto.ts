

export class ImportRuleSecrecyLevelDto {
    private 'builtin_rule_id'?: string;
    private 'secrecy_level'?: string;
    public constructor() { 
    }
    public withBuiltinRuleId(builtinRuleId: string): ImportRuleSecrecyLevelDto {
        this['builtin_rule_id'] = builtinRuleId;
        return this;
    }
    public set builtinRuleId(builtinRuleId: string  | undefined) {
        this['builtin_rule_id'] = builtinRuleId;
    }
    public get builtinRuleId(): string | undefined {
        return this['builtin_rule_id'];
    }
    public withSecrecyLevel(secrecyLevel: string): ImportRuleSecrecyLevelDto {
        this['secrecy_level'] = secrecyLevel;
        return this;
    }
    public set secrecyLevel(secrecyLevel: string  | undefined) {
        this['secrecy_level'] = secrecyLevel;
    }
    public get secrecyLevel(): string | undefined {
        return this['secrecy_level'];
    }
}