

export class DataClassificationSingleRuleDTO {
    private 'rule_code'?: string;
    private 'algorithm_type'?: DataClassificationSingleRuleDTOAlgorithmTypeEnum | string;
    private 'match_type'?: DataClassificationSingleRuleDTOMatchTypeEnum | string;
    public expression?: string;
    private 'builtin_rule_id'?: string;
    public constructor(ruleCode?: string, algorithmType?: string, matchType?: string, expression?: string) { 
        this['rule_code'] = ruleCode;
        this['algorithm_type'] = algorithmType;
        this['match_type'] = matchType;
        this['expression'] = expression;
    }
    public withRuleCode(ruleCode: string): DataClassificationSingleRuleDTO {
        this['rule_code'] = ruleCode;
        return this;
    }
    public set ruleCode(ruleCode: string  | undefined) {
        this['rule_code'] = ruleCode;
    }
    public get ruleCode(): string | undefined {
        return this['rule_code'];
    }
    public withAlgorithmType(algorithmType: DataClassificationSingleRuleDTOAlgorithmTypeEnum | string): DataClassificationSingleRuleDTO {
        this['algorithm_type'] = algorithmType;
        return this;
    }
    public set algorithmType(algorithmType: DataClassificationSingleRuleDTOAlgorithmTypeEnum | string  | undefined) {
        this['algorithm_type'] = algorithmType;
    }
    public get algorithmType(): DataClassificationSingleRuleDTOAlgorithmTypeEnum | string | undefined {
        return this['algorithm_type'];
    }
    public withMatchType(matchType: DataClassificationSingleRuleDTOMatchTypeEnum | string): DataClassificationSingleRuleDTO {
        this['match_type'] = matchType;
        return this;
    }
    public set matchType(matchType: DataClassificationSingleRuleDTOMatchTypeEnum | string  | undefined) {
        this['match_type'] = matchType;
    }
    public get matchType(): DataClassificationSingleRuleDTOMatchTypeEnum | string | undefined {
        return this['match_type'];
    }
    public withExpression(expression: string): DataClassificationSingleRuleDTO {
        this['expression'] = expression;
        return this;
    }
    public withBuiltinRuleId(builtinRuleId: string): DataClassificationSingleRuleDTO {
        this['builtin_rule_id'] = builtinRuleId;
        return this;
    }
    public set builtinRuleId(builtinRuleId: string  | undefined) {
        this['builtin_rule_id'] = builtinRuleId;
    }
    public get builtinRuleId(): string | undefined {
        return this['builtin_rule_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DataClassificationSingleRuleDTOAlgorithmTypeEnum {
    REGEX = 'REGEX',
    REGEX_INSENSITIVE = 'REGEX_INSENSITIVE',
    GROOVY = 'GROOVY',
    LENGTH_EQ = 'LENGTH_EQ',
    LENGTH_GT = 'LENGTH_GT',
    LENGTH_LT = 'LENGTH_LT',
    BUILTIN = 'BUILTIN'
}
/**
    * @export
    * @enum {string}
    */
export enum DataClassificationSingleRuleDTOMatchTypeEnum {
    CONTENT = 'CONTENT',
    COLUMN = 'COLUMN',
    COMMIT = 'COMMIT',
    TABLE_NAME = 'TABLE_NAME',
    TABLE_COMMENT = 'TABLE_COMMENT',
    DATABASE_NAME = 'DATABASE_NAME'
}
