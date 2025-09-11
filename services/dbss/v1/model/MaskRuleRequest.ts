

export class MaskRuleRequest {
    private 'mask_regex'?: string;
    private 'mask_value'?: string;
    private 'rule_name'?: string;
    public constructor(maskRegex?: string, maskValue?: string, ruleName?: string) { 
        this['mask_regex'] = maskRegex;
        this['mask_value'] = maskValue;
        this['rule_name'] = ruleName;
    }
    public withMaskRegex(maskRegex: string): MaskRuleRequest {
        this['mask_regex'] = maskRegex;
        return this;
    }
    public set maskRegex(maskRegex: string  | undefined) {
        this['mask_regex'] = maskRegex;
    }
    public get maskRegex(): string | undefined {
        return this['mask_regex'];
    }
    public withMaskValue(maskValue: string): MaskRuleRequest {
        this['mask_value'] = maskValue;
        return this;
    }
    public set maskValue(maskValue: string  | undefined) {
        this['mask_value'] = maskValue;
    }
    public get maskValue(): string | undefined {
        return this['mask_value'];
    }
    public withRuleName(ruleName: string): MaskRuleRequest {
        this['rule_name'] = ruleName;
        return this;
    }
    public set ruleName(ruleName: string  | undefined) {
        this['rule_name'] = ruleName;
    }
    public get ruleName(): string | undefined {
        return this['rule_name'];
    }
}