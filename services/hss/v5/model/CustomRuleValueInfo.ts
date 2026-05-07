

export class CustomRuleValueInfo {
    private 'rule_type'?: string;
    private 'hash_type'?: string;
    private 'auto_block'?: number;
    private 'rule_values'?: Array<string>;
    public constructor(ruleType?: string, hashType?: string, autoBlock?: number, ruleValues?: Array<string>) { 
        this['rule_type'] = ruleType;
        this['hash_type'] = hashType;
        this['auto_block'] = autoBlock;
        this['rule_values'] = ruleValues;
    }
    public withRuleType(ruleType: string): CustomRuleValueInfo {
        this['rule_type'] = ruleType;
        return this;
    }
    public set ruleType(ruleType: string  | undefined) {
        this['rule_type'] = ruleType;
    }
    public get ruleType(): string | undefined {
        return this['rule_type'];
    }
    public withHashType(hashType: string): CustomRuleValueInfo {
        this['hash_type'] = hashType;
        return this;
    }
    public set hashType(hashType: string  | undefined) {
        this['hash_type'] = hashType;
    }
    public get hashType(): string | undefined {
        return this['hash_type'];
    }
    public withAutoBlock(autoBlock: number): CustomRuleValueInfo {
        this['auto_block'] = autoBlock;
        return this;
    }
    public set autoBlock(autoBlock: number  | undefined) {
        this['auto_block'] = autoBlock;
    }
    public get autoBlock(): number | undefined {
        return this['auto_block'];
    }
    public withRuleValues(ruleValues: Array<string>): CustomRuleValueInfo {
        this['rule_values'] = ruleValues;
        return this;
    }
    public set ruleValues(ruleValues: Array<string>  | undefined) {
        this['rule_values'] = ruleValues;
    }
    public get ruleValues(): Array<string> | undefined {
        return this['rule_values'];
    }
}