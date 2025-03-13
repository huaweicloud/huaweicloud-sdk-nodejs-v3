

export class DataClassificationRuleOperateDTO {
    private 'rule_type'?: DataClassificationRuleOperateDTORuleTypeEnum | string;
    private 'secrecy_level_id'?: string;
    public name?: string;
    public method?: DataClassificationRuleOperateDTOMethodEnum | string;
    private 'content_expression'?: string;
    private 'column_expression'?: string;
    private 'commit_expression'?: string;
    private 'builtin_rule_id'?: string;
    public description?: string;
    private 'category_id'?: string;
    public constructor(ruleType?: string, secrecyLevelId?: string, name?: string) { 
        this['rule_type'] = ruleType;
        this['secrecy_level_id'] = secrecyLevelId;
        this['name'] = name;
    }
    public withRuleType(ruleType: DataClassificationRuleOperateDTORuleTypeEnum | string): DataClassificationRuleOperateDTO {
        this['rule_type'] = ruleType;
        return this;
    }
    public set ruleType(ruleType: DataClassificationRuleOperateDTORuleTypeEnum | string  | undefined) {
        this['rule_type'] = ruleType;
    }
    public get ruleType(): DataClassificationRuleOperateDTORuleTypeEnum | string | undefined {
        return this['rule_type'];
    }
    public withSecrecyLevelId(secrecyLevelId: string): DataClassificationRuleOperateDTO {
        this['secrecy_level_id'] = secrecyLevelId;
        return this;
    }
    public set secrecyLevelId(secrecyLevelId: string  | undefined) {
        this['secrecy_level_id'] = secrecyLevelId;
    }
    public get secrecyLevelId(): string | undefined {
        return this['secrecy_level_id'];
    }
    public withName(name: string): DataClassificationRuleOperateDTO {
        this['name'] = name;
        return this;
    }
    public withMethod(method: DataClassificationRuleOperateDTOMethodEnum | string): DataClassificationRuleOperateDTO {
        this['method'] = method;
        return this;
    }
    public withContentExpression(contentExpression: string): DataClassificationRuleOperateDTO {
        this['content_expression'] = contentExpression;
        return this;
    }
    public set contentExpression(contentExpression: string  | undefined) {
        this['content_expression'] = contentExpression;
    }
    public get contentExpression(): string | undefined {
        return this['content_expression'];
    }
    public withColumnExpression(columnExpression: string): DataClassificationRuleOperateDTO {
        this['column_expression'] = columnExpression;
        return this;
    }
    public set columnExpression(columnExpression: string  | undefined) {
        this['column_expression'] = columnExpression;
    }
    public get columnExpression(): string | undefined {
        return this['column_expression'];
    }
    public withCommitExpression(commitExpression: string): DataClassificationRuleOperateDTO {
        this['commit_expression'] = commitExpression;
        return this;
    }
    public set commitExpression(commitExpression: string  | undefined) {
        this['commit_expression'] = commitExpression;
    }
    public get commitExpression(): string | undefined {
        return this['commit_expression'];
    }
    public withBuiltinRuleId(builtinRuleId: string): DataClassificationRuleOperateDTO {
        this['builtin_rule_id'] = builtinRuleId;
        return this;
    }
    public set builtinRuleId(builtinRuleId: string  | undefined) {
        this['builtin_rule_id'] = builtinRuleId;
    }
    public get builtinRuleId(): string | undefined {
        return this['builtin_rule_id'];
    }
    public withDescription(description: string): DataClassificationRuleOperateDTO {
        this['description'] = description;
        return this;
    }
    public withCategoryId(categoryId: string): DataClassificationRuleOperateDTO {
        this['category_id'] = categoryId;
        return this;
    }
    public set categoryId(categoryId: string  | undefined) {
        this['category_id'] = categoryId;
    }
    public get categoryId(): string | undefined {
        return this['category_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DataClassificationRuleOperateDTORuleTypeEnum {
    CUSTOM = 'CUSTOM',
    BUILTIN = 'BUILTIN'
}
/**
    * @export
    * @enum {string}
    */
export enum DataClassificationRuleOperateDTOMethodEnum {
    REGULAR = 'REGULAR',
    NONE = 'NONE',
    DEFAULT = 'DEFAULT'
}
