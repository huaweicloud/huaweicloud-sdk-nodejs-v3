

export class RulesetItem {
    private 'template_id'?: string;
    public language?: string;
    private 'template_name'?: string;
    private 'creator_id'?: string;
    private 'creator_name'?: string;
    private 'template_create_time'?: string;
    private 'is_used'?: string;
    private 'rule_ids'?: string;
    private 'is_default'?: string;
    private 'is_devcloud_project_default'?: string;
    private 'is_default_template'?: string;
    public constructor() { 
    }
    public withTemplateId(templateId: string): RulesetItem {
        this['template_id'] = templateId;
        return this;
    }
    public set templateId(templateId: string  | undefined) {
        this['template_id'] = templateId;
    }
    public get templateId(): string | undefined {
        return this['template_id'];
    }
    public withLanguage(language: string): RulesetItem {
        this['language'] = language;
        return this;
    }
    public withTemplateName(templateName: string): RulesetItem {
        this['template_name'] = templateName;
        return this;
    }
    public set templateName(templateName: string  | undefined) {
        this['template_name'] = templateName;
    }
    public get templateName(): string | undefined {
        return this['template_name'];
    }
    public withCreatorId(creatorId: string): RulesetItem {
        this['creator_id'] = creatorId;
        return this;
    }
    public set creatorId(creatorId: string  | undefined) {
        this['creator_id'] = creatorId;
    }
    public get creatorId(): string | undefined {
        return this['creator_id'];
    }
    public withCreatorName(creatorName: string): RulesetItem {
        this['creator_name'] = creatorName;
        return this;
    }
    public set creatorName(creatorName: string  | undefined) {
        this['creator_name'] = creatorName;
    }
    public get creatorName(): string | undefined {
        return this['creator_name'];
    }
    public withTemplateCreateTime(templateCreateTime: string): RulesetItem {
        this['template_create_time'] = templateCreateTime;
        return this;
    }
    public set templateCreateTime(templateCreateTime: string  | undefined) {
        this['template_create_time'] = templateCreateTime;
    }
    public get templateCreateTime(): string | undefined {
        return this['template_create_time'];
    }
    public withIsUsed(isUsed: string): RulesetItem {
        this['is_used'] = isUsed;
        return this;
    }
    public set isUsed(isUsed: string  | undefined) {
        this['is_used'] = isUsed;
    }
    public get isUsed(): string | undefined {
        return this['is_used'];
    }
    public withRuleIds(ruleIds: string): RulesetItem {
        this['rule_ids'] = ruleIds;
        return this;
    }
    public set ruleIds(ruleIds: string  | undefined) {
        this['rule_ids'] = ruleIds;
    }
    public get ruleIds(): string | undefined {
        return this['rule_ids'];
    }
    public withIsDefault(isDefault: string): RulesetItem {
        this['is_default'] = isDefault;
        return this;
    }
    public set isDefault(isDefault: string  | undefined) {
        this['is_default'] = isDefault;
    }
    public get isDefault(): string | undefined {
        return this['is_default'];
    }
    public withIsDevcloudProjectDefault(isDevcloudProjectDefault: string): RulesetItem {
        this['is_devcloud_project_default'] = isDevcloudProjectDefault;
        return this;
    }
    public set isDevcloudProjectDefault(isDevcloudProjectDefault: string  | undefined) {
        this['is_devcloud_project_default'] = isDevcloudProjectDefault;
    }
    public get isDevcloudProjectDefault(): string | undefined {
        return this['is_devcloud_project_default'];
    }
    public withIsDefaultTemplate(isDefaultTemplate: string): RulesetItem {
        this['is_default_template'] = isDefaultTemplate;
        return this;
    }
    public set isDefaultTemplate(isDefaultTemplate: string  | undefined) {
        this['is_default_template'] = isDefaultTemplate;
    }
    public get isDefaultTemplate(): string | undefined {
        return this['is_default_template'];
    }
}