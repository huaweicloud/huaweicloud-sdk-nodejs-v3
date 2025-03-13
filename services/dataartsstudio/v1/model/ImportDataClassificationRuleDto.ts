

export class ImportDataClassificationRuleDto {
    public uuid?: string;
    private 'classification_type'?: ImportDataClassificationRuleDtoClassificationTypeEnum | string;
    private 'secrecy_level'?: string;
    public name?: string;
    public enable?: boolean;
    public method?: ImportDataClassificationRuleDtoMethodEnum | string;
    public description?: string;
    private 'category_id'?: string;
    private 'builtin_rule_id'?: string;
    private 'updated_by'?: string;
    private 'update_at'?: number;
    private 'created_by'?: string;
    private 'create_at'?: number;
    public constructor() { 
    }
    public withUuid(uuid: string): ImportDataClassificationRuleDto {
        this['uuid'] = uuid;
        return this;
    }
    public withClassificationType(classificationType: ImportDataClassificationRuleDtoClassificationTypeEnum | string): ImportDataClassificationRuleDto {
        this['classification_type'] = classificationType;
        return this;
    }
    public set classificationType(classificationType: ImportDataClassificationRuleDtoClassificationTypeEnum | string  | undefined) {
        this['classification_type'] = classificationType;
    }
    public get classificationType(): ImportDataClassificationRuleDtoClassificationTypeEnum | string | undefined {
        return this['classification_type'];
    }
    public withSecrecyLevel(secrecyLevel: string): ImportDataClassificationRuleDto {
        this['secrecy_level'] = secrecyLevel;
        return this;
    }
    public set secrecyLevel(secrecyLevel: string  | undefined) {
        this['secrecy_level'] = secrecyLevel;
    }
    public get secrecyLevel(): string | undefined {
        return this['secrecy_level'];
    }
    public withName(name: string): ImportDataClassificationRuleDto {
        this['name'] = name;
        return this;
    }
    public withEnable(enable: boolean): ImportDataClassificationRuleDto {
        this['enable'] = enable;
        return this;
    }
    public withMethod(method: ImportDataClassificationRuleDtoMethodEnum | string): ImportDataClassificationRuleDto {
        this['method'] = method;
        return this;
    }
    public withDescription(description: string): ImportDataClassificationRuleDto {
        this['description'] = description;
        return this;
    }
    public withCategoryId(categoryId: string): ImportDataClassificationRuleDto {
        this['category_id'] = categoryId;
        return this;
    }
    public set categoryId(categoryId: string  | undefined) {
        this['category_id'] = categoryId;
    }
    public get categoryId(): string | undefined {
        return this['category_id'];
    }
    public withBuiltinRuleId(builtinRuleId: string): ImportDataClassificationRuleDto {
        this['builtin_rule_id'] = builtinRuleId;
        return this;
    }
    public set builtinRuleId(builtinRuleId: string  | undefined) {
        this['builtin_rule_id'] = builtinRuleId;
    }
    public get builtinRuleId(): string | undefined {
        return this['builtin_rule_id'];
    }
    public withUpdatedBy(updatedBy: string): ImportDataClassificationRuleDto {
        this['updated_by'] = updatedBy;
        return this;
    }
    public set updatedBy(updatedBy: string  | undefined) {
        this['updated_by'] = updatedBy;
    }
    public get updatedBy(): string | undefined {
        return this['updated_by'];
    }
    public withUpdateAt(updateAt: number): ImportDataClassificationRuleDto {
        this['update_at'] = updateAt;
        return this;
    }
    public set updateAt(updateAt: number  | undefined) {
        this['update_at'] = updateAt;
    }
    public get updateAt(): number | undefined {
        return this['update_at'];
    }
    public withCreatedBy(createdBy: string): ImportDataClassificationRuleDto {
        this['created_by'] = createdBy;
        return this;
    }
    public set createdBy(createdBy: string  | undefined) {
        this['created_by'] = createdBy;
    }
    public get createdBy(): string | undefined {
        return this['created_by'];
    }
    public withCreateAt(createAt: number): ImportDataClassificationRuleDto {
        this['create_at'] = createAt;
        return this;
    }
    public set createAt(createAt: number  | undefined) {
        this['create_at'] = createAt;
    }
    public get createAt(): number | undefined {
        return this['create_at'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ImportDataClassificationRuleDtoClassificationTypeEnum {
    BUILTIN = 'BUILTIN',
    CUSTOM = 'CUSTOM'
}
/**
    * @export
    * @enum {string}
    */
export enum ImportDataClassificationRuleDtoMethodEnum {
    NONE = 'NONE',
    REGULAR = 'REGULAR',
    DEFAULT = 'DEFAULT'
}
