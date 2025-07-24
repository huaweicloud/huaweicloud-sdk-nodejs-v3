

export class RuleConfig {
    public id?: number;
    private 'rule_id'?: number;
    private 'default_value'?: string;
    private 'option_value'?: string;
    private 'option_key'?: string;
    private 'option_name'?: string;
    private 'template_id'?: string;
    public description?: string;
    public constructor() { 
    }
    public withId(id: number): RuleConfig {
        this['id'] = id;
        return this;
    }
    public withRuleId(ruleId: number): RuleConfig {
        this['rule_id'] = ruleId;
        return this;
    }
    public set ruleId(ruleId: number  | undefined) {
        this['rule_id'] = ruleId;
    }
    public get ruleId(): number | undefined {
        return this['rule_id'];
    }
    public withDefaultValue(defaultValue: string): RuleConfig {
        this['default_value'] = defaultValue;
        return this;
    }
    public set defaultValue(defaultValue: string  | undefined) {
        this['default_value'] = defaultValue;
    }
    public get defaultValue(): string | undefined {
        return this['default_value'];
    }
    public withOptionValue(optionValue: string): RuleConfig {
        this['option_value'] = optionValue;
        return this;
    }
    public set optionValue(optionValue: string  | undefined) {
        this['option_value'] = optionValue;
    }
    public get optionValue(): string | undefined {
        return this['option_value'];
    }
    public withOptionKey(optionKey: string): RuleConfig {
        this['option_key'] = optionKey;
        return this;
    }
    public set optionKey(optionKey: string  | undefined) {
        this['option_key'] = optionKey;
    }
    public get optionKey(): string | undefined {
        return this['option_key'];
    }
    public withOptionName(optionName: string): RuleConfig {
        this['option_name'] = optionName;
        return this;
    }
    public set optionName(optionName: string  | undefined) {
        this['option_name'] = optionName;
    }
    public get optionName(): string | undefined {
        return this['option_name'];
    }
    public withTemplateId(templateId: string): RuleConfig {
        this['template_id'] = templateId;
        return this;
    }
    public set templateId(templateId: string  | undefined) {
        this['template_id'] = templateId;
    }
    public get templateId(): string | undefined {
        return this['template_id'];
    }
    public withDescription(description: string): RuleConfig {
        this['description'] = description;
        return this;
    }
}